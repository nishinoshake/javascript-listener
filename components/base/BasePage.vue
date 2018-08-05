<template>
  <div class="page">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    id: String
  }
}
</script>

<style lang="scss">
.page {
  @include inside;
  // ページ遷移
  &-enter,
  &-leave-to {
    opacity: 0;
  }
  &-enter-active {
    transition: 0.16s linear;
  }
  &-leave-active {
    transition: 16ms linear;
  }
}
</style>
