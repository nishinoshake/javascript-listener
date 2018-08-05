<template>
  <BasePage>
    <AnimationBlock />
    <AnimationTransition />
    <PageNavigation
      prev-text="メディア"
      prev-link="/media/"
      next-text="デバイス"
      next-link="/device/"
    />
  </BasePage>
</template>

<script>
import meta from '@/config/meta'
import AnimationBlock from '@/components/partial/animation/AnimationBlock'
import AnimationTransition from '@/components/partial/animation/AnimationTransition'

export default {
  components: {
    AnimationBlock,
    AnimationTransition
  },
  head() {
    return meta.animation
  }
}
</script>
