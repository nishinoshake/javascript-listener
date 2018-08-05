<template>
  <BaseBlock>
    <PrimaryTitle>Hover</PrimaryTitle>

    <BasePlayground>
      <BaseRect id="hover" />
    </BasePlayground>

    <!-- mouseenter -->
    <BaseSection id="mouseenter">
      <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter">mouseenter</SecondaryTitle>
      <BaseText>マウスが要素に乗ったとき。</BaseText>
      <CodeBlock category="mouse" name="mouseenter" />
    </BaseSection>

    <!-- mousemove -->
    <BaseSection id="mousemove">
      <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/mousemove">mousemove</SecondaryTitle>
      <BaseText>マウスが要素上で動いたとき。<br>このイベントは頻度が高いので、<BaseLink href="/coding/">適度に間引いて処理</BaseLink>をしたほうが優しいです。</BaseText>
      <CodeBlock category="mouse" name="mousemove" />
    </BaseSection>

    <!-- mouseleave -->
    <BaseSection id="mouseleave">
      <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/mouseleave">mouseleave</SecondaryTitle>
      <BaseText>マウスが要素から離れたとき。</BaseText>
      <CodeBlock category="mouse" name="mouseleave" />
    </BaseSection>

    <!-- その他のイベント -->
    <BaseSection>
      <SecondaryTitle small>その他のイベント</SecondaryTitle>
      <BaseText>マウスが乗ったときのイベントには<BaseLinkExternal href="https://developer.mozilla.org/en-US/docs/Web/Events/mouseover">mouseover</BaseLinkExternal>と<BaseLinkExternal href="https://developer.mozilla.org/en-US/docs/Web/Events/mouseout">mouseout</BaseLinkExternal>などもありますが、子要素がいる場合に余計なイベントが発生してしまうので、それを意図して使う場合を除いては<BaseCode>mouseenter</BaseCode>と<BaseCode>mouseleave</BaseCode>を使ったほうが思い通りになると思います。</BaseText>
    </BaseSection>
  </BaseBlock>
</template>

<script>
import { addListener } from '@/lib/event'
import { group, separate } from '@/lib/console'

export default {
  mounted() {
    // mouseenter
    addListener(document.querySelector('#hover'), 'mouseenter', e => {
      separate()
      group('mouseenter', () => {
        console.log(e)
      })
      separate()
    })

    // mousemove
    addListener(document.querySelector('#hover'), 'mousemove', e => {
      group('mousemove', () => {
        console.log(e)
      })
    })

    // mouseleave
    addListener(document.querySelector('#hover'), 'mouseleave', e => {
      separate()
      group('mouseleave', () => {
        console.log(e)
      })
    })
  }
}
</script>
