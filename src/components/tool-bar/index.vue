<template>
  <div class="c-tool-bar">
    <button
      class="c-button"
      open-type="share"
      @click="">
      推荐给好友
    </button>
    <div
      class="c-button"
      @click="">
      获取优惠券
    </div>
    <div class="c-icon"></div>
  </div>
</template>

<script>
export default {
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
