<template>
  <EventBlock id="TouchEvent">
    <EventTitle>TouchEvent</EventTitle>
    <EventSummary>
      <EventCrumb :events="['Event', 'UIEvent', 'TouchEvent']" />
      <BaseText>タッチに関するイベントの引数として渡されるオブジェクトです。それぞれの指に対して<BaseLinkExternal href="https://developer.mozilla.org/ja/docs/Web/API/Touch">Touchオブジェクト</BaseLinkExternal>の値を読み取ることができます。取得できる値はMouseEventと似ています。</BaseText>
    </EventSummary>
    <CodeBlock category="mouse" name="TouchEvent" />
  </EventBlock>
</template>
