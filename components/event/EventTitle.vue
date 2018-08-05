<template>
  <h2 class="event-title"><slot /></h2>
</template>

<style lang="scss" scoped>
.event-title {
  position: absolute;
  top: -1.6rem;
  left: -1.6rem;
  padding: 0.8rem 1.2rem;
  font-size: 2.2rem;
  background-color: $color-dark;
  color: $color-white;
  @include min {
    top: -2rem;
    left: -2rem;
    padding: 1.2rem 1.6rem;
    font-size: 3.2rem;
  }
}
</style>
