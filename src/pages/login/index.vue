<template>
  <div class="p-login bgc1">
    <CLogo />
    <p class="pb-tip c4 fs27">
      您暂未获取微信授权，将无法正常使用小程序的功能。如需要正常使用，请点击“授权登录”按钮，打开头像，昵称等信息的授权。
    </p>
    <button
      class="c-button c-button--1 bgc3 c1 fs32"
      open-type="getUserInfo"
      @getuserinfo="handleGetUserInfo">
      授权登录
    </button>
  </div>
</template>

<script>
import { utils } from 'mp-client'
import CLogo from '@/components/logo'

export default {
  components: {
    CLogo
  },
  methods: {
    async handleGetUserInfo (e) {
      const { iv, encryptedData } = e.mp.detail
      const getSettingRes = await this.$wx.getSetting()
      const loginRes = await this.$wx.login({
        withCredentials: true
      })

      if (!getSettingRes.authSetting['scope.userInfo']) {
        this.$wx.showToast({ title: '您需要授权登录才能进行下一步操作' })
      } else {
        const wxUsersPostActionRes = await this.$store.dispatch('wxUsers/postAction', {
          body: {
            type: 'LOGIN',
            code: loginRes.code,
            iv,
            encryptedData,
            loginRes
          }
        })

        const { wxUser, token } = wxUsersPostActionRes.data
        const url = this.$mp.query.from
          ? '/' + utils.url.decode(this.$mp.query.from)
          : '/pages/home/index'

        this.$auth.login({ user: wxUser, token })
        this.$wx.navigateTo({ url })
      }
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>
