<template>
  <button class="copy" ref="copy" @click="copy" :data-clipboard-text="code">{{ text }}</button>
</template>

<script>
import ClipboardJS from 'clipboard'

export default {
  props: {
    code: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      timer: null,
      text: 'Copy',
      clipboardInstance: null
    }
  },
  mounted() {
    this.clipboardInstance = new ClipboardJS(this.$refs.copy)
  },
  beforeDestroy() {
    this.clipboardInstance.destroy()
    if (this.timer) {
      clearTimeout(this.timer)
    }
  },
  methods: {
    copy() {
      this.text = 'Yeah!'
      this.timer = setTimeout(() => {
        this.text = 'Copy'
        this.timer = null
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.copy {
  width: 5rem;
  height: 2.8rem;
  font-size: 1.2rem;
  line-height: 1;
  background-color: $color-snow;
  border-radius: 0.4rem;
  @include font-source;
  @include center-flex;
  @include min {
    width: 6rem;
    height: 3rem;
    font-size: 1.4rem;
  }
  &:hover {
    background-color: darken($color-snow, 5%);
  }
}
</style>
