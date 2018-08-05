<template>
  <BaseBlock>
    <PrimaryTitle>Load</PrimaryTitle>

    <!-- DOMContentLoaded -->
    <BaseSection id="DOMContentLoaded">
      <SecondaryTitle href="https://developer.mozilla.org/ja/docs/Web/Reference/Events/DOMContentLoaded">DOMContentLoaded</SecondaryTitle>
      <BaseText>HTMLドキュメントの解析が完了したとき。<br>画像などのリソースの読み込みを待つ必要がある場合は<BaseCode>load</BaseCode>を使用します。</BaseText>
      <CodeBlock category="page" name="DOMContentLoaded" />
    </BaseSection>

    <!-- load -->
    <BaseSection id="load">
      <SecondaryTitle href="https://developer.mozilla.org/ja/docs/Web/Reference/Events/load">load</SecondaryTitle>
      <BaseText>すべてのリソースが読まれたとき。<br><BaseCode>window</BaseCode>だけでなく、画像などのリソースの読み込み確認にも使えます。</BaseText>
      <CodeBlock category="page" name="load" />
    </BaseSection>

    <!-- その他のイベント -->
    <BaseSection>
      <SecondaryTitle small>その他のイベント</SecondaryTitle>
      <BaseText>ページの読み込みや遷移に関するイベントは、使用頻度が少ないものでは<BaseLinkExternal href="https://developer.mozilla.org/ja/docs/Web/Reference/Events/beforeunload">beforeunload</BaseLinkExternal>や<BaseLinkExternal href="https://developer.mozilla.org/en-US/docs/Web/Events/pagehide">pagehide</BaseLinkExternal>などが他にありますが、ブラウザによって挙動が違ったり動かなかったりするので、使用する際には注意が必要です。</BaseText>
    </BaseSection>
  </BaseBlock>
</template>

<script>
import { addListener } from '@/lib/event'
import { group } from '@/lib/console'

export default {
  mounted() {
    addListener(document, 'DOMContentLoaded', e => {
      group('DOMContentLoaded', () => {
        console.log('DOMの操作ができます')
        console.log(e)
      })
    })

    addListener(window, 'load', e => {
      group('load', () => {
        console.log('リソースの読み込みが終わりました')
        console.log(e)
      })
    })
  }
}
</script>
