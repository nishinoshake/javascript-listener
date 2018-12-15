<template>
  <BasePage>
    <section class="mokuji">
      <h2 class="mokuji-title">目次</h2>
      <div class="mokuji-list">
        <section v-for="m in mokuji" :key="m.parent.path" class="mokuji-item">
          <h3 class="mokuji-parent"><nuxt-link :to="`/${m.parent.path}/`">{{ m.parent.name }}</nuxt-link></h3>
          <ul class="mokuji-children">
            <li v-for="child in m.children" :key="child"><nuxt-link :to="`/${m.parent.path}/#${child}`">{{ child }}</nuxt-link></li>
          </ul>
        </section>
      </div>
    </section>
  </BasePage>
</template>

<script>
import meta from '@/config/meta'
import mokuji from '@/config/mokuji'

export default {
  head() {
    return meta.index
  },
  data() {
    return {
      mokuji
    }
  }
}
</script>

<style lang="scss" scoped>
.mokuji {
  &-list {
    margin-top: 3rem;
    @include min {
      margin-top: 8rem;
    }
  }
  &-item {
    &:nth-child(n + 2) {
      margin-top: 5rem;
      @include min {
        margin-top: 8rem;
      }
    }
  }
  &-title {
    font-size: 2.6rem;
    @include min {
      font-size: 4rem;
    }
  }
  &-parent {
    margin-bottom: 2.2rem;
    font-size: 2.4rem;
    letter-spacing: 0.1em;
    line-height: 1;
    @include min {
      margin-bottom: 2.8rem;
      font-size: 3.2rem;
    }
    a {
      position: relative;
      z-index: 0;
      display: inline-block;
      color: $color-text;
      text-decoration: none;
    }
  }
  &-children {
    display: flex;
    flex-wrap: wrap;
    margin: -0.8rem -1.2rem;
    @include min {
      margin: -1rem -1.4rem;
    }
    li {
      line-height: 1;
      @include min {
        margin: 1rem 1.4rem;
      }
      a {
        font-size: 1.8rem;
        text-decoration: none;
        color: $color-text;
        @include max {
          display: block;
          padding: 0.8rem 1.2rem;
        }
        @include min {
          font-size: 2.6rem;
        }
      }
    }
  }
}
</style>
