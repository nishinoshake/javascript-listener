<template>
  <h2 :id="id" :class="['title-primary', {'mod-small': small}]">
    <a v-if="href" target="_blank" :href="href">
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>

<script>
export default {
  props: {
    href: String,
    id: String,
    small: Boolean
  }
}
</script>

<style lang="scss" scoped>
.title-primary {
  margin-bottom: 3rem;
  font-size: 3.2rem;
  line-height: 1.4;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  @include min {
    margin-bottom: 5rem;
    font-size: 5.2rem;
    line-height: 1;
  }
  &.mod-small {
    font-size: 2.8rem;
    @include min {
      font-size: 3.5rem;
    }
  }
}
</style>
