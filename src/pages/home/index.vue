<template>
  <div class="p-home">
    <div class="pb-intro">
    </div>

    <video
      class="pb-video"
      src="https://www.chongyangyanglao.com/apis/v1/files/396"
      :autoplay="cVideo.autoplay"
      controls>
    </video>

    <div class="pb-point-guide">积分规则</div>
    <CToolBar />
    <CPopup
      :visible="cPopup.visible"
      @close="cPopup.visible = false">
      <div slot="content">abc</div>
    </CPopup>
  </div>
</template>

<script>
import CToolBar from '@/components/tool-bar'
import CPopup from '@/components/popup'

export default {
  components: {
    CToolBar,
    CPopup
  },
  data () {
    return {
      cVideo: {
        autoplay: true
      },
      cPopup: {
        visible: false
      }
    }
  },
  async onShow () {
    /*
    this.$wx.showToast({ title: '吐司' })

    await this.$helpers.sleep(2000)

    this.$wx.navigateTo({
      requiresLogin: true,
      url: '/pages/share/index'
    })
    */
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>
