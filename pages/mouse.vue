<template>
  <BasePage>
    <MouseHover />
    <MouseClick />
    <MouseTouch />
    <PageNavigation
      prev-text="ページ"
      prev-link="/page/"
      next-text="フォーム"
      next-link="/form/"
    />
  </BasePage>
</template>

<script>
import meta from '@/config/meta'
import MouseHover from '@/components/partial/mouse/MouseHover'
import MouseClick from '@/components/partial/mouse/MouseClick'
import MouseTouch from '@/components/partial/mouse/MouseTouch'

export default {
  components: {
    MouseHover,
    MouseClick,
    MouseTouch
  },
  head() {
    return meta.mouse
  }
}
</script>
