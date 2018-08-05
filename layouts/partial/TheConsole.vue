<template>
  <transition name="console">
    <p v-if="please" class="console">イベントの情報はConsoleへ出力しています</p>
  </transition>
</template>

<script>
let devtools
let isMobile
let isMicrosoft

if (process.browser) {
  isMobile = require('@/lib/ua').isMobile
  isMicrosoft = require('@/lib/ua').isMicrosoft

  if (!isMobile && !isMicrosoft) {
    devtools = require('devtools-detect')
  }
}

export default {
  data() {
    return {
      timer: null,
      please: false,
      isOpen: false,
      isFirstTime: true
    }
  },
  watch: {
    isOpen(val) {
      if (val) {
        // 何回も出すと邪魔なので
        if (!this.isFirstTime) {
          return
        }

        this.please = true
        this.isFirstTime = false

        // 出っぱなしだと邪魔なので
        this.timer = setTimeout(() => {
          this.timer = null
          this.please = false
        }, 4600)
      } else {
        this.please = false
        if (this.timer) {
          clearTimeout(this.timer)
        }
      }
    }
  },
  mounted() {
    // スマホとMicrosoftはスルー
    if (isMobile || isMicrosoft) {
      return
    }

    // いきなり出たら邪魔なので少し待つ
    setTimeout(() => {
      this.isOpen = !devtools.open
    }, 1500)

    window.addEventListener('devtoolschange', e => {
      this.isOpen = !e.detail.open
    })
  }
}
</script>

<style lang="scss" scoped>
.console {
  width: 100%;
  position: fixed;
  z-index: 10;
  bottom: 0;
  left: 0;
  padding: 2.5rem;
  font-size: 1.8rem;
  line-height: 1;
  letter-spacing: 0.1em;
  text-align: center;
  color: $color-light;
  background-color: $color-accent;
  &-enter-active,
  &-leave-active {
    transform: translate3d(0, 0, 0);
  }
  &-enter-active {
    transition: transform 0.5s $easeOutQuart;
  }
  &-leave-active {
    transition: transform 0.6s $easeInOutQuart;
  }
  &-enter,
  &-leave-to {
    transform: translate3d(0, 100%, 0);
  }
  a {
    font-size: 2.2rem;
    text-decoration: none;
    font-weight: 700;
  }
}
</style>
