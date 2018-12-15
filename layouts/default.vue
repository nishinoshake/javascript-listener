<template>
  <div class="app">
    <TheHeader />
    <TheMain />
    <TheFooter />
    <TheConsole />
  </div>
</template>

<script>
import TheHeader from '@/layouts/partial/TheHeader'
import TheMain from '@/layouts/partial/TheMain'
import TheFooter from '@/layouts/partial/TheFooter'
import TheConsole from '@/layouts/partial/TheConsole'

export default {
  components: {
    TheHeader,
    TheMain,
    TheFooter,
    TheConsole
  }
}
</script>

<style lang="scss">
// ==========================================================================
// !!!グローバル!!!
//
// このファイル以外では@/components/CodeBlock.vueのスタイルが、
// highlight.jsのスタイルを正しくあてるためにグローバルになっています。
// ==========================================================================
html {
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
  color: $color-text;
  background-color: $color-bg;
  @include font-serif;
}
.pc {
  @include max {
    display: none !important;
  }
}
.sp {
  @include min {
    display: none !important;
  }
}
.app {
  overflow: hidden;
  position: relative;
  z-index: 0;
}

// 余計なマージンが発生しないように隣接要素のmargin-topでとる
.block + .block {
  margin-top: 8rem;
  @include min {
    margin-top: 12rem;
  }
}
.section + .section {
  margin-top: 6rem;
  @include min {
    margin-top: 8rem;
  }
}
.text + .text {
  margin-top: 2rem;
}
.text + .code-block {
  margin-top: 3.2rem;
}
.code-block + .code-block {
  margin-top: 4rem;
}
</style>
