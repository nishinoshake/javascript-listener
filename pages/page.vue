<template>
  <BasePage>
    <PageLoad />
    <PageView />
    <PageNavigation
      next-text="マウス"
      next-link="/mouse/"
    />
  </BasePage>
</template>

<script>
import meta from '@/config/meta'
import PageLoad from '@/components/partial/page/PageLoad'
import PageView from '@/components/partial/page/PageView'

export default {
  components: {
    PageLoad,
    PageView
  },
  head() {
    return meta.page
  }
}
</script>
