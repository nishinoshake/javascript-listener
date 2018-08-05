<template>
  <BaseBlock>
    <PrimaryTitle>View</PrimaryTitle>

    <!-- scroll -->
    <BaseSection id="scroll">
      <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/scroll">scroll</SecondaryTitle>
      <BaseText>スクロールされたとき。<br>ページのスクロールだけでなく、要素の中でスクロールする場合でも使えます。<br>このイベントは頻度が高いので、<BaseLink href="/coding/">適度に間引いて処理</BaseLink>をしたほうが優しいです。</BaseText>
      <CodeBlock category="page" name="scroll" />
    </BaseSection>

    <!-- resize -->
    <BaseSection id="resize">
      <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/resize">resize</SecondaryTitle>
      <BaseText>リサイズされたとき。<br>こちらもスクロールと同様に<BaseLink href="/coding/">適度に間引いて処理</BaseLink>をしたほうが優しいです。</BaseText>
      <CodeBlock category="page" name="resize" />
    </BaseSection>

    <PageEvent />
  </BaseBlock>
</template>

<script>
import { addListener } from '@/lib/event'
import { group } from '@/lib/console'
import PageEvent from '@/components/partial/page/PageEvent'

export default {
  components: {
    PageEvent
  },
  mounted() {
    // scroll
    addListener(
      window,
      'scroll',
      e => {
        group('scroll', () => {
          console.log(`x:${window.pageXOffset}`, `y:${window.pageYOffset}`)
          console.log(e)
        })
      },
      { raf: true }
    )

    // resize
    addListener(
      window,
      'resize',
      e => {
        group('resize', () => {
          console.log(`width:${window.innerWidth}`, `height:${window.innerHeight}`)
          console.log(e)
        })
      },
      { raf: true }
    )
  }
}
</script>
