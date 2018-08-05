<template>
  <BaseBlock>
    <PrimaryTitle>Animation</PrimaryTitle>

    <BasePlayground>
      <BaseRect id="animation" :class="{'is-animating': isAnimating}" text="Click!" />
    </BasePlayground>

    <!-- animationstart -->
    <BaseSection id="animationstart">
      <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/animationstart">animationstart</SecondaryTitle>
      <BaseText>CSSのアニメーションが始まったとき。</BaseText>
      <CodeBlock category="animation" name="animationstart" />
    </BaseSection>

    <!-- animationiteration -->
    <BaseSection id="animationiteration">
      <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/animationiteration">animationiteration</SecondaryTitle>
      <BaseText>CSSのアニメーションに繰り返しが設定されていて、区切りが訪れるたびに。</BaseText>
      <CodeBlock category="animation" name="animationiteration" />
    </BaseSection>

    <!-- animationend -->
    <BaseSection id="animationend">
      <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/animationend">animationend</SecondaryTitle>
      <BaseText>CSSのアニメーションが終わったとき。</BaseText>
      <CodeBlock category="animation" name="animationend" />
    </BaseSection>

    <AnimationEvent />
  </BaseBlock>
</template>

<script>
import { addListener } from '@/lib/event'
import { group, separate } from '@/lib/console'
import AnimationEvent from '@/components/partial/animation/AnimationEvent'

export default {
  components: {
    AnimationEvent
  },
  data() {
    return {
      isAnimating: false
    }
  },
  mounted() {
    // click
    addListener(document.querySelector('#animation'), 'click', e => {
      if (!this.isAnimating) {
        this.isAnimating = true
      }
    })

    // animationstart
    addListener(document.querySelector('#animation'), 'animationstart', e => {
      separate()
      group('animationstart', () => {
        console.log(e)
      })
    })

    // animationiteration
    addListener(document.querySelector('#animation'), 'animationiteration', e => {
      group('animationiteration', () => {
        console.log(e)
      })
    })

    // animationend
    addListener(document.querySelector('#animation'), 'animationend', e => {
      this.isAnimating = false
      group('animationend', () => {
        console.log(e)
      })
    })
  }
}
</script>

<style lang="scss" scoped>
#animation {
  &.is-animating {
    animation: anime-sp 1s $easeInOutCubic alternate 4;
    @include min {
      animation-name: anime-pc;
    }
  }
}
@keyframes anime-sp {
  0% {
    transform: translate(0, 0) rotate(0);
  }
  100% {
    transform: translate(22rem, 0) rotate(360deg);
  }
}
@keyframes anime-pc {
  0% {
    transform: translate(0, 0) rotate(0);
  }
  100% {
    transform: translate(80rem, 0) rotate(360deg);
  }
}
</style>
