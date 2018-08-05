<template>
  <code class="code">
    <slot />
  </code>
</template>

<script>
export default {
  props: {
    id: String
  }
}
</script>

<style lang="scss">
.code {
  margin: 0 0.2rem;
  padding: 0.3rem 0.6rem;
  display: inline-block;
  line-height: 1;
  color: $color-dark;
  background-color: $color-snow;
  border-radius: 0.6rem;
  @include font-source;
  @include min {
    padding: 0.5rem 0.8rem;
  }
}
</style>
