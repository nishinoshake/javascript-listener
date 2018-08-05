<template>
  <h3 :id="id" :class="['title-secondary', {'mod-small': small}]">
    <a v-if="href" target="_blank" :href="href">
      <slot /><i class="far fa-external-link"></i>
    </a>
    <slot v-else />
  </h3>
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
.title-secondary {
  margin-bottom: 2rem;
  font-size: 2.6rem;
  line-height: 1.2;
  @include min {
    margin-bottom: 2rem;
    font-size: 3.8rem;
  }
  &.mod-small {
    font-size: 2.4rem;
    @include min {
      font-size: 3.2rem;
    }
  }
  a {
    display: inline-flex;
    align-items: center;
    position: relative;
    color: $color-text;
    text-decoration: none;
    i {
      padding-left: 1.2rem;
      font-size: 60%;
    }
  }
}
</style>
