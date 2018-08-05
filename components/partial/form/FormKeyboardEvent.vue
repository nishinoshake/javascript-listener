<template>
  <EventBlock id="KeyboardEvent">
    <EventTitle>KeyboardEvent</EventTitle>
    <EventSummary>
      <EventCrumb :events="['Event', 'UIEvent', 'KeyboardEvent']" />
      <BaseText>キーボード関連のイベントのインターフェースです。<br><BaseCode>e.key</BaseCode>の一覧は<BaseLinkExternal href="https://developer.mozilla.org/ja/docs/Web/API/KeyboardEvent/key/Key_Values" >MDN</BaseLinkExternal>で確認できます。<br></BaseText>
    </EventSummary>
    <CodeBlock category="form" name="KeyboardEvent" />
  </EventBlock>
</template>
