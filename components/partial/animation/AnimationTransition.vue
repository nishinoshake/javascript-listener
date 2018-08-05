<template>
  <BaseBlock>
    <PrimaryTitle>Transition</PrimaryTitle>

    <div class="playground">
      <BaseRect id="transition" text="Hover!" />
    </div>

    <!-- transitionend -->
    <BaseSection id="transitionend">
      <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/transitionend">transitionend</SecondaryTitle>
      <BaseText>CSSのトランジションが終わったとき。</BaseText>
      <CodeBlock category="animation" name="transitionend" />
    </BaseSection>

    <!-- その他のイベント -->
    <BaseSection>
      <SecondaryTitle small>その他のイベント</SecondaryTitle>
      <BaseText>アニメーション関連のイベントには、<BaseLinkExternal href="https://developer.mozilla.org/en-US/docs/Web/Events/transitionstart">transitionstart</BaseLinkExternal>や<BaseLinkExternal href="https://developer.mozilla.org/en-US/docs/Web/Events/animationcancel">animationcancel</BaseLinkExternal>などもありますが、サポートしているブラウザが少ないため、コードは載せていません。使用する際はブラウザのサポートを確認したほうが良いと思います。</BaseText>
    </BaseSection>

    <AnimationTransitionEvent />
  </BaseBlock>
</template>

<script>
import { addListener } from '@/lib/event'
import { group } from '@/lib/console'
import AnimationTransitionEvent from '@/components/partial/animation/AnimationTransitionEvent'

export default {
  components: {
    AnimationTransitionEvent
  },
  mounted() {
    // transitionend
    addListener(document.querySelector('#transition'), 'transitionend', e => {
      group('transitionend', () => {
        console.log(e)
      })
    })
  }
}
</script>
