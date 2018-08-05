<template>
  <BaseBlock>
    <PrimaryTitle>Click</PrimaryTitle>

    <BasePlayground>
      <div id="clickable-wrap" :class="{'is-animating': isAnimating}">
        <BaseRect id="clickable" />
      </div>
    </BasePlayground>

    <!-- mousedown -->
    <BaseSection id="mousedown">
      <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/mousedown">mousedown</SecondaryTitle>
      <BaseText>マウスが押されたとき。</BaseText>
      <CodeBlock category="mouse" name="mousedown" />
    </BaseSection>

    <!-- mouseup -->
    <BaseSection id="mouseup">
      <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/mouseup">mouseup</SecondaryTitle>
      <BaseText>マウスが離されたとき。</BaseText>
      <CodeBlock category="mouse" name="mouseup" />
    </BaseSection>

    <!-- click -->
    <BaseSection id="click">
      <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/click">click</SecondaryTitle>
      <BaseText>マウスがクリックされたとき。<br>文字通りですが mousedown → mouseup → click の順に実行されます。</BaseText>
      <CodeBlock category="mouse" name="click" />
    </BaseSection>

    <!-- dblclick -->
    <BaseSection id="dblclick">
      <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/dblclick">dblclick</SecondaryTitle>
      <BaseText>マウスがダブルクリックされたとき。</BaseText>
      <CodeBlock category="mouse" name="dblclick" />
    </BaseSection>

    <!-- contextmenu -->
    <BaseSection id="contextmenu">
      <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/contextmenu">contextmenu</SecondaryTitle>
      <BaseText>マウスが右クリックされてメニューが開く前。</BaseText>
      <CodeBlock category="mouse" name="contextmenu" />
    </BaseSection>

    <!-- MouseEvent -->
    <MouseEvent />
  </BaseBlock>
</template>

<script>
import { addListener } from '@/lib/event'
import { group, separate } from '@/lib/console'
import MouseEvent from '@/components/partial/mouse/MouseEvent'

export default {
  components: {
    MouseEvent
  },
  data() {
    return {
      isAnimating: false
    }
  },
  mounted() {
    // mousedown
    addListener(document.querySelector('#clickable'), 'mousedown', e => {
      separate()
      group('mousedown', () => {
        console.log(e)
      })
    })

    // mouseup
    addListener(document.querySelector('#clickable'), 'mouseup', e => {
      group('mouseup', () => {
        console.log(e)
      })
    })

    // click
    addListener(document.querySelector('#clickable'), 'click', e => {
      group('click', () => {
        console.log(e)
      })
    })

    // dblclick
    addListener(document.querySelector('#clickable'), 'dblclick', e => {
      group('dblclick', () => {
        console.log(e)
      })
    })

    // contextmenu
    addListener(document.querySelector('#clickable'), 'contextmenu', e => {
      group('contextmenu', () => {
        console.log(e)
      })
    })

    // クリック時のアニメーション
    addListener(document.querySelector('#clickable-wrap'), 'mousedown', e => {
      if (!this.isAnimating) {
        this.isAnimating = true
      }
    })

    addListener(document.querySelector('#clickable-wrap'), 'animationend', e => {
      this.isAnimating = false
    })

    addListener(document.querySelector('#clickable-wrap'), 'contextmenu', e => {
      this.isAnimating = false
    })
  }
}
</script>

<style lang="scss" scoped>
#clickable-wrap {
  display: inline-block;
  &.is-animating {
    animation: anime-clickable 0.26s;
  }
}

@keyframes anime-clickable {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(0, 0, 0) scale(0.92);
    animation-timing-function: $easeOutExpo;
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
    animation-timing-function: $easeInExpo;
  }
}
</style>
