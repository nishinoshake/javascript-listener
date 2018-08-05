<template>
  <EventBlock id="scroll">
    <EventTitle>scroll</EventTitle>
    <EventSummary>
      <p class="coding-scroll"><span>{{ y }}</span>px</p>
    </EventSummary>
    <CodeBlock category="coding" name="scroll" />
  </EventBlock>
</template>

<script>
import { addListener } from '@/lib/event'
import { group } from '@/lib/console'

export default {
  data() {
    return {
      y: 0
    }
  },
  mounted() {
    let isRunning = false

    addListener(window, 'scroll', e => {
      if (!isRunning) {
        isRunning = true
        window.requestAnimationFrame(() => {
          group('scroll', () => {
            console.log(e)
          })
          this.y = window.pageYOffset
          isRunning = false
        })
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.coding-scroll {
  padding: 2rem 0;
  font-size: 4rem;
  @include font-source;
  @include min {
    padding: 4rem;
    font-size: 6rem;
  }
  span {
    margin-right: 0.8rem;
    font-size: 4rem;
    letter-spacing: 0.04em;
    @include min {
      font-size: 8rem;
    }
  }
}
</style>
