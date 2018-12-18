<template>
  <div class="p-my">
    <div class="pb-wrap">
      <img
        class="pb-avatar"
        :src="user.avatarUrl" />
      <div class="pb-nickname c1 fs34">{{ user.nickName }}</div>
      <div class="pb-cell c-cell">
        <div class="c-cell__item">
          abc
        </div>
        <div class="c-cell__item">
          abc
        </div>
        <div class="c-cell__item">
          abc
        </div>
      </div>
    </div>
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
