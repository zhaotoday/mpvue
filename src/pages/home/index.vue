<template>
  <div class="p-index">
    <button
      class="c-button c-button--2"
      open-type="share">
      推荐给好友
    </button>
    <CSwiper :items="[]" />
  </div>
</template>

<script>
import CSwiper from '@/components/swiper'

export default {
  components: {
    CSwiper
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
  },
  onShareAppMessage () {
    return {
      title: '还差一个帮帮砍就可以免费参加这个测试啦。麻烦你帮我打开点击帮砍一下，不胜感激，谢谢老板！',
      path: '/pages/ask-for/index/main',
      imageUrl: `${this.$consts.CDN_URL}/pages/ask-for/index/share.png`
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>
