<template>
  <div class="p-my">
    <image :src="user.avatarUrl" />
    {{ user.nickName }}
  </div>
</template>

<script>
export default {
  computed: {
    user () {
      return this.$auth.get().user
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>
