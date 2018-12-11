<template>
  <div class="p-login bgc1">
    <div class="pb-logo">
      <div class="c-icon c-icon--logo"></div>
      <div class="pb-logo__title c2 fs36 fwb">重阳养老</div>
    </div>
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

export default {
  onShow () {
    this.$wx.getUserInfo()
  },
  methods: {
    async handleGetUserInfo (e) {
      const { userInfo, iv, encryptedData } = e.mp.detail
      const loginRes = await this.$wx.login({
        withCredentials: true
      })
      const getSettingRes = await this.$wx.getSetting()

      if (!getSettingRes.authSetting['scope.userInfo']) {
        this.$wx.showToast({ title: '您需要授权登录才能进行下一步操作' })
      } else {
        try {
          console.log(1)

          const wxUsersPostActionRes = await this.$store.dispatch('wxUsers/postAction', {
            body: {
              type: 'LOGIN',
              code: loginRes.code,
              iv,
              encryptedData,
              loginRes
            }
          })

          console.log(wxUsersPostActionRes, userInfo, iv, encryptedData, loginRes)

          /*
          const siginRes = await this.$wx.request({
            requiresAuth: false,
            method: 'GET',
            url: 'http://localhost:3002/test',
            dataType: 'json',
            data: {
              code: loginRes.code,
              user: userInfo,
              iv,
              encryptedData
            }
          })
          console.log(siginRes)

          if (siginRes.data.code === 0) {
            this.$auth.login({
              user: userInfo,
              token: siginRes.data.data[0].token
            })
          }
          */
        } catch (e) {
          console.log(222, e)
        }
        const url = '/' + utils.url.decode(this.$mp.query.from)

        try {
          await this.$wx.navigateTo({ url })
        } catch (e) {
          await this.$wx.switchTab({ url })
        }
      }
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>
