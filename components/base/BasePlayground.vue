<template>
  <div :id="id" class="playground">
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
.playground {
  margin: 3.6rem 0 4rem;
  @include min {
    margin: 6.4rem 0 7rem;
  }
}
</style>
