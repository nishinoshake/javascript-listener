<template>
  <BasePage>
    <BaseBlock>
      <PrimaryTitle>Device</PrimaryTitle>

      <!-- deviceorientation -->
      <BaseSection id="deviceorientation">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/deviceorientation">deviceorientation</SecondaryTitle>
        <BaseText>デバイスの方向の変化を検出したとき。<br>デバイスの傾きで何かをしたいときなどに使えます。<br>Chromeを使っている場合、<BaseLinkExternal href="https://developers.google.com/web/tools/chrome-devtools/device-mode/device-input-and-sensors?hl=ja">開発ツールからデバイスの向きをエミュレート</BaseLinkExternal>することができます。</BaseText>
        <BaseText>デバイスの座標に関する説明は、<BaseLinkExternal href="https://developer.mozilla.org/ja/docs/DOM/Orientation_and_motion_data_explained">MDN</BaseLinkExternal>や<BaseLinkExternal href="https://developers.google.com/web/fundamentals/native-hardware/device-orientation/?hl=ja">Web Fundamentals</BaseLinkExternal>のページが詳しいです。</BaseText>
        <CodeBlock category="device" name="deviceorientation" />
      </BaseSection>

      <!-- devicemotion -->
      <BaseSection id="devicemotion">
        <SecondaryTitle href="https://developer.mozilla.org/en-US/docs/Web/Events/devicemotion">devicemotion</SecondaryTitle>
        <BaseText>デバイスの加速度の変化を検出したとき。<br>デバイスのシェイクで何かをしたいときなどに使えます。</BaseText>
        <CodeBlock category="device" name="devicemotion" />
      </BaseSection>
    </BaseBlock>
    <PageNavigation
      prev-text="アニメーション"
      prev-link="/animation/"
    />
  </BasePage>
</template>

<script>
import meta from '@/config/meta'
import { addListener } from '@/lib/event'
import { group } from '@/lib/console'

export default {
  head() {
    return meta.device
  },
  mounted() {
    addListener(window, 'deviceorientation', e => {
      group('deviceorientation', () => {
        console.log(`alpha: ${e.alpha}`)
        console.log(`beta: ${e.beta}`)
        console.log(`gamma: ${e.gamma}`)
        console.log(e)
      })
    })

    addListener(window, 'devicemotion', e => {
      group('devicemotion', () => {
        console.log(`x: ${e.acceleration.x}`)
        console.log(`y: ${e.acceleration.y}`)
        console.log(`z: ${e.acceleration.z}`)
        console.log(e)
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.device {
  &-playground {
    display: flex;
    justify-content: center;
  }
  &-demo {
    font-size: 15rem;
    line-height: 1;
  }
}
</style>
