<template>
  <nuxt-link :to="href" class="internal-link">
    <slot />
  </nuxt-link>
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
.internal-link {
  color: $color-link;
  text-decoration: underline;
  &:hover {
    color: darken($color-link, 10%);
  }
}
</style>
