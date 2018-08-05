<template>
  <section :id="id" class="event-block">
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    id: String
  }
}
</script>

<style lang="scss" scoped>
.event-block {
  position: relative;
  margin-top: 8rem;
  border: 0.4rem solid $color-dark;
  @include min {
    margin-top: 10.5rem;
  }
}
</style>
