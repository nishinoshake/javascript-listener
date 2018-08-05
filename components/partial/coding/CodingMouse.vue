<template>
  <EventBlock id="mouse">
    <EventTitle>mouse</EventTitle>
    <EventSummary>
      <div class="circle-wrap">
        <div
          :class="['circle', {'is-dragging': isDragging}]"
          :style="{transform: `translate3d(${x}px, ${y}px, 0)`}"
          id="circle"
        >Drag!</div>
      </div>
    </EventSummary>
    <CodeBlock category="coding" name="mouse" />
  </EventBlock>
</template>

<script>
import { addListener } from '@/lib/event'
import { group } from '@/lib/console'

export default {
  data() {
    return {
      x: 0,
      y: 0,
      isDragging: false,
      startPosition: null,
      lastPosition: null,
      requestId: null
    }
  },
  mounted() {
    const circle = document.getElementById('circle')

    addListener(circle, 'mousedown', e => {
      this.start(e.clientX, e.clientY)
      group('mousedown', () => {
        console.log(e)
      })
    })

    addListener(circle, 'mousemove', e => {
      this.move(e.clientX, e.clientY)
      group('mousemove', () => {
        console.log(e)
      })
    })

    addListener(circle, 'mouseup', e => {
      this.leave()
      group('mouseup', () => {
        console.log(e)
      })
    })

    addListener(circle, 'mouseleave', e => {
      this.leave()
    })

    addListener(circle, 'touchstart', e => {
      this.start(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
      group('touchstart', () => {
        console.log(e)
      })
    })

    addListener(circle, 'touchmove', e => {
      this.move(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
      group('touchmove', () => {
        console.log(e)
      })
      e.preventDefault()
    })

    addListener(circle, 'touchend', e => {
      this.leave()
      group('touchend', () => {
        console.log(e)
      })
    })
  },
  methods: {
    start(clientX, clientY) {
      this.isDragging = true
      this.startPosition = { x: clientX, y: clientY }
      this.lastPosition = { x: clientX, y: clientY }
      this.animate()
    },
    move(clientX, clientY) {
      if (this.isDragging) {
        this.lastPosition = { x: clientX, y: clientY }
      }
    },
    leave() {
      this.isDragging = false
      this.x = 0
      this.y = 0

      if (this.requestId) {
        window.cancelAnimationFrame(this.requestId)
      }
    },
    animate() {
      this.x = this.lastPosition.x - this.startPosition.x
      this.y = this.lastPosition.y - this.startPosition.y

      this.requestId = window.requestAnimationFrame(this.animate)
    }
  }
}
</script>

<style lang="scss" scoped>
.circle {
  width: 12rem;
  height: 12rem;
  position: relative;
  z-index: 1;
  font-size: 1.6rem;
  font-weight: bold;
  letter-spacing: 0.08em;
  color: $color-light;
  background-color: $color-accent;
  border-radius: 50%;
  transition: 0.6s $easeOutQuart;
  user-select: none;
  @include center-flex;
  cursor: grab;
  @include min {
    width: 20rem;
    height: 20rem;
    font-size: 2.5rem;
  }
  &.is-dragging {
    transition-duration: 0s;
    cursor: grabbing;
  }
  &-wrap {
    padding: 2rem 0;
    @include min {
      padding: 4rem;
    }
  }
}
</style>
