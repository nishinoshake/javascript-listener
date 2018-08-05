<template>
  <BasePage>
    <!-- 頻度が高いイベントへの対応  ======================================== -->
    <BaseBlock>
      <div class="coding">
        <PrimaryTitle small>頻度が高いイベントへの対応</PrimaryTitle>
        <BaseText>イベントには<BaseCode>click</BaseCode>のように扱いやすいものがある一方で、<BaseCode>scroll</BaseCode>や<BaseCode>mousemove</BaseCode>などのように大量に実行されてしまう厄介なものもあります。そのようなイベントをそのまま実装してしまうと不要な呼び出しが多く、動作が重たくなる原因になってしまうので、適度に間引いて処理をしたほうがブラウザに優しいです。</BaseText>
        <BaseText>最近のブラウザでは、指定した関数を再描画の前に呼び出してくれる<BaseLinkExternal href="https://developer.mozilla.org/ja/docs/Web/API/Window/requestAnimationFrame">requestAnimationFrame</BaseLinkExternal>という便利なメソッドがあるので、それを使用して最適化する例をいくつか載せています。</BaseText>
        <BaseText>今では少ないかと思いますが、<BaseLinkExternal href="https://developer.mozilla.org/ja/docs/Web/API/Window/requestAnimationFrame">requestAnimationFrame</BaseLinkExternal>に対応していない、IE9以前/Android4.3以前などのブラウザにも対応する必要がある場合は、非対応のときにsetTimeoutに置き換えてくれる<BaseLinkExternal href="https://gist.github.com/paulirish/1579671">Polyfill</BaseLinkExternal>のようなもの使うか、別の実装を検討する必要があります。</BaseText>
        <BaseText><BaseLinkExternal href="https://caniuse.com/#feat=requestanimationframe">Can I use | requestAnimationFrame</BaseLinkExternal></BaseText>

        <CodingScroll />
        <CodingMouse />
      </div>
    </BaseBlock>
  </BasePage>
</template>

<script>
import meta from '@/config/meta'
import CodingScroll from '@/components/partial/coding/CodingScroll'
import CodingMouse from '@/components/partial/coding/CodingMouse'

export default {
  components: { CodingScroll, CodingMouse },
  head() {
    return meta.coding
  }
}
</script>

<style lang="scss" scoped>
.coding {
  @include min {
    padding: 4rem 0 8rem;
  }
}
</style>
