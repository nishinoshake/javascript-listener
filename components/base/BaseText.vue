<template>
  <p class="text">
    <slot />
  </p>
</template>

<script>
export default {
  props: {
    id: String
  }
}
</script>

<style lang="scss">
.text {
  font-size: 1.6rem;
  line-height: 2;
  letter-spacing: 0.04em;
  @include min {
    font-size: 2rem;
  }
}
</style>
