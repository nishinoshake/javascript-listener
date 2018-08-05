<template>
  <div class="rect" :id="id">
    <p class="rect-label">{{ `#${id}` }}</p>
    <p v-if="text" class="rect-text">{{ text }}</p>
  </div>
</template>

<script>
import Clipboard from '@/components/Clipboard'

export default {
  components: {
    Clipboard
  },
  props: {
    id: {
      type: String,
      required: true
    },
    text: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.rect {
  width: 12rem;
  height: 12rem;
  position: relative;
  border-radius: 1rem;
  background-color: $color-accent;
  flex-direction: column;
  box-shadow: 0 0 0 rgba($color-accent, 0.6);
  cursor: pointer;
  @include center-flex;
  @include min {
    width: 20rem;
    height: 20rem;
  }
  &:hover {
    box-shadow: 0 0 10px 36px rgba($color-accent, 0);
    transition: 0.7s $easeOutCubic;
  }
  &-label,
  &-text {
    font-size: 1.6rem;
    line-height: 1;
    white-space: nowrap;
    font-weight: 700;
    color: $color-light;
    transition: 0.2s $easeOutCubic;
    @include min {
      font-size: 2.5rem;
    }
  }
  &-text {
    margin: 1rem 0 -1.2rem;
    @include min {
      margin: 1.6rem 0 -1.2rem;
    }
  }
}
</style>
