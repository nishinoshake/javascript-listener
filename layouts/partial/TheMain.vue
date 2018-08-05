<template>
  <main class="main">
    <nuxt/>
  </main>
</template>

<style lang="scss">
.main {
  padding: 6rem 0;
  position: relative;
  z-index: 0;
  @include min {
    padding: 6rem 0 10rem;
  }
  &:before,
  &:after {
    content: '';
    z-index: -1;
    width: 100%;
    height: 0.4rem;
    position: absolute;
    left: 0;
    background: repeating-linear-gradient(90deg, $color-dark, $color-dark 10px, $color-white 0, $color-white 20px);
    transition: 0.4s $easeOutCubic;
    @include between {
      transform: translate3d(0, 0, 0) skew(0, 4deg);
    }
    @include min($width-border-change) {
      transform: translate3d(0, 0, 0) skew(0, 8deg);
    }
  }
  &:before {
    top: 0;
  }
  &:after {
    bottom: 0;
  }
}
</style>
