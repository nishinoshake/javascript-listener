<template>
  <section :id="id" class="section">
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
