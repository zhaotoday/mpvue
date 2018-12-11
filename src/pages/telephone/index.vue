<template>
  <div class="p-telephone bgc1">
    <CLogo />
    <p class="pb-tip c4 fs27">请绑定手机号，以便为您提供更好的服务。</p>
    <input
      class="c-input"
      v-model.lazy="cForm.data.telephone" />
    <input
      class="c-input"
      v-model.lazy="cForm.data.checkCode" />
    <div
      :class="[ 'c-check-code', { 'is-disabled': cCheckCode.disabled } ]"
      @click="handleGetCheckCode">
      {{ cCheckCode.message }}
    </div>
    <button
      class="c-button c-button--1 bgc3 c1 fs32"
      open-type="getUserInfo"
      @getuserinfo="handleConfirm">
      确定
    </button>
  </div>
</template>

<script>
import CLogo from '@/components/logo'

export default {
  components: {
    CLogo
  },
  data () {
    return {
      cForm: {
        data: {}
      },
      cCheckCode: {
        disabled: false,
        message: '获取短信验证码'
      }
    }
  },
  methods: {
    getCheckCode (telephone) {
      return this.$store.dispatch('wxUsers/postAction', {
        body: {
          type: 'GET_CHECK_CODE',
          telephone
        }
      })
    },
    async handleGetCheckCode () {
      if (this.cCheckCode.disabled) return

      const { telephone } = this.cForm.data

      if (!telephone) {
        this.$wx.showToast({ title: '手机号不能为空' })
        return
      }

      await this.getCheckCode(telephone)

      let i = 0
      let leftSeconds = 60

      this.cCheckCode.disabled = true
      this.cCheckCode.message = `${leftSeconds} 秒后重新获取`

      this.timer = setInterval(() => {
        this.cCheckCode.message = `${leftSeconds - ++i} 秒后重新获取`

        if (leftSeconds === i) {
          clearInterval(this.timer)

          this.cCheckCode.disabled = false
          this.cCheckCode.message = '获取短信验证码'
        }
      }, 1000)
    },
    async handleConfirm () {
      const { telephone, checkCode } = this.cForm.data

      if (!telephone) {
        this.$wx.showToast({ title: '手机号不能为空' })
        return
      }

      if (!checkCode) {
        this.$wx.showToast({ title: '短信验证码不能为空' })
        return
      }

      await this.$store.dispatch('wxUsers/postAction', {
        body: {
          type: 'BIND_TELEPHONE',
          telephone,
          checkCode
        }
      })

      this.$wx.navigateTo({
        url: ''
      })
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>
