<template>
  <div class="p-index">
    <CSwiper :items="cSwiper.items" />
    <div class="pb-intro">
      <rich-text>
        dfdsf <br>范德萨范德萨
      </rich-text>
    </div>
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
import CSwiper from '@/components/swiper'
import CToolBar from '@/components/tool-bar'
import CPopup from '@/components/popup'

export default {
  components: {
    CSwiper,
    CToolBar,
    CPopup
  },
  data () {
    return {
      cSwiper: {
        items: [
          'https://cyyl.lrcdn.cn/files/2018-09-26/2a08dea0-c157-11e8-8171-b55e4434bc48.jpg',
          'https://cyyl.lrcdn.cn/files/2018-08-10/b985be80-9caf-11e8-94ad-99efffc00aa5.jpg',
          'https://cyyl.lrcdn.cn/files/2018-08-12/eaa24910-9d87-11e8-bde4-d997e4de5f27.jpg'
        ]
      },
      cPopup: {
        visible: true
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
