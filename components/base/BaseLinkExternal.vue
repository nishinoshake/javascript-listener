<template>
  <a :href="href" target="_blank" class="external-link">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.external-link {
  color: $color-link;
  text-decoration: underline;
  &:hover {
    color: darken($color-link, 10%);
  }
}
</style>
