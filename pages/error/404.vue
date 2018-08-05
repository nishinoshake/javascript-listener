<template>
  <BasePage>
    <section class="error">
      <h2 class="error-title">404 Not Found</h2>
      <p class="error-text">With Great Power<br>Comes Great<br>Responsibility</p>
      <p class="error-link"><a href="https://en.wikipedia.org/wiki/Spider-Man" target="_blank">Spider-Man</a></p>
    </section>
  </BasePage>
</template>

<script>
import meta from '@/config/meta'

export default {
  head() {
    return meta.error_404
  }
}
</script>

<style lang="scss" scoped>
.error {
  @include min {
    padding-bottom: 8rem;
  }
  &-title {
    font-size: 2.2rem;
    @include font-source;
    @include min {
      font-size: 4rem;
    }
  }
  &-text {
    margin: 4rem 0 2rem;
    font-size: 2.8rem;
    line-height: 1.4;
    @include font-source;
    @include min {
      margin: 8rem 0 5rem;
      font-size: 6rem;
    }
  }
  &-link {
    a {
      font-size: 2.2rem;
      color: $color-link;
      @include font-source;
      @include min {
        font-size: 4rem;
      }
    }
  }
}
</style>
