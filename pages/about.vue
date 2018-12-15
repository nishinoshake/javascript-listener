<template>
  <BasePage>
    <div class="about">
      <p class="about-text">JavaScriptにはたくさんのイベントがあります。</p>
      <p class="about-text">名前が似ているものや、使い方にクセがあるものがあったり、イベントオブジェクトにどんな値が渡されるかを忘れてしまったりするので、簡単なようで実装に手間どること多いです。</p>
      <p class="about-text">なのでこのサイトでは、よく使うイベントの概要をざっくりまとめ、それぞれのイベントオブジェクトをコンソールで確認できることを、主な目的としています。</p>
      <p class="about-text">より多くのイベントや詳しい説明が必要な場合は、<BaseLinkExternal href="https://developer.mozilla.org/ja/docs/Web/Reference/Events">MDNのイベントリファレンス</BaseLinkExternal>がわかりやすいのでおすすめです。</p>
      <p class="about-text">動画・音声の素材は<BaseLinkExternal href="http://www1.nhk.or.jp/archives/creative/">NHK CREATIVE LIBRARY</BaseLinkExternal>のものを使わせていただきました。ありがとうございます。</p>
    </div>
  </BasePage>
</template>

<script>
import meta from '@/config/meta'

export default {
  head() {
    return meta.about
  }
}
</script>

<style lang="scss" scoped>
.about {
  &-text {
    font-size: 2rem;
    letter-spacing: 0.05em;
    line-height: 2;
    @include min {
      font-size: 2.6rem;
    }
    &:nth-child(n + 2) {
      margin-top: 3rem;
      @include min {
        margin-top: 4rem;
      }
    }
  }
}
</style>
