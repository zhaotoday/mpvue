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
  created () {
    this.$wx.showToast({ title: '吐司' })
  }
}
</script>

<style
  lang="scss"
  src="./styles/index.scss">
</style>
