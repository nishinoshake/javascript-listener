<template>
  <div class="event-summary">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.event-summary {
  padding: 4rem 2rem 2rem;
  background-color: $color-bg;
  @include min {
    padding: 6.6rem 3rem 3rem;
  }
}
</style>
