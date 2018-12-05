<template>
  <div class="p-index">
    index
    <Card />
  </div>
</template>

<script>
import Card from '@/components/card'

export default {
  components: {
    Card
  },
  async onShow () {
    this.$wx.showToast({ title: '吐司' })

    await this.$helpers.sleep(2000)

    this.$wx.navigateTo({
      requiresLogin: true,
      url: '/pages/share/index'
    })
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>
