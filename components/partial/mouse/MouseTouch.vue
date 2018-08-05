<template>
  <BaseBlock>
    <PrimaryTitle>Touch</PrimaryTitle>

    <BasePlayground>
      <BaseRect id="touch" />
    </BasePlayground>

    <!-- touchstart -->
    <BaseSection id="touchstart">
      <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/touchstart">touchstart</SecondaryTitle>
      <BaseText>タッチされたとき。</BaseText>
      <CodeBlock category="mouse" name="touchstart" />
    </BaseSection>

    <!-- touchmove -->
    <BaseSection id="touchmove">
      <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/touchmove">touchmove</SecondaryTitle>
      <BaseText>タッチされて動いているとき。<br>このイベントは頻度が高いので、<BaseLink href="/coding/">適度に間引いて処理</BaseLink>をしたほうが優しいです。</BaseText>
      <CodeBlock category="mouse" name="touchmove" />
    </BaseSection>

    <!-- touchend -->
    <BaseSection id="touchend">
      <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/touchend">touchend</SecondaryTitle>
      <BaseText>タッチが離れたとき。</BaseText>
      <CodeBlock category="mouse" name="touchend" />
    </BaseSection>

    <!-- MouseTouchEvent -->
    <MouseTouchEvent />
  </BaseBlock>
</template>

<script>
import { addListener } from '@/lib/event'
import { group, separate } from '@/lib/console'
import MouseTouchEvent from '@/components/partial/mouse/MouseTouchEvent'

export default {
  components: {
    MouseTouchEvent
  },
  mounted() {
    // touchstart
    addListener(document.querySelector('#touch'), 'touchstart', e => {
      separate()
      group('touchstart', () => {
        console.log(e)
      })
      separate()
    })

    // touchmove
    addListener(document.querySelector('#touch'), 'touchmove', e => {
      group('touchmove', () => {
        console.log(e.changedTouches[0])
        console.log(e)
      })
      e.preventDefault()
    })

    // touchend
    addListener(document.querySelector('#touch'), 'touchend', e => {
      separate()
      group('touchend', () => {
        console.log(e)
      })
    })
  }
}
</script>
