<template>
  <div :id="id" class="block">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    id: String
  }
}
</script>
