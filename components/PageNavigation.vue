<template>
  <ul class="page-navigation">
    <li class="page-navigation-prev" v-if="prevLink"><nuxt-link :to="prevLink"><span>←</span>{{ prevText }}</nuxt-link></li>
    <li class="page-navigation-next" v-if="nextLink"><nuxt-link :to="nextLink">{{ nextText }}<span>→</span></nuxt-link></li>
  </ul>
</template>

<script>
export default {
  props: {
    prevLink: String,
    prevText: String,
    nextLink: String,
    nextText: String
  }
}
</script>

<style lang="scss" scoped>
.page-navigation {
  margin-top: 6rem;
  @include max {
    height: 2.3rem;
    position: relative;
  }
  @include min {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 10rem;
  }
  &-prev,
  &-next {
    @include max {
      position: absolute;
      top: 0;
    }
    a {
      display: flex;
      align-items: center;
      font-size: 1.8rem;
      line-height: 1;
      white-space: nowrap;
      color: $color-text;
      text-decoration: none;
      @include min {
        font-size: 3.2rem;
      }
    }
  }
  &-prev {
    @include max {
      left: 0;
    }
    span {
      margin-right: 0.6rem;
      @include min {
        margin-right: 1.2rem;
      }
    }
  }
  &-next {
    @include max {
      right: 0;
    }
    @include min {
      margin-left: 10rem;
    }
    span {
      margin-left: 0.6rem;
      @include min {
        margin-left: 1.2rem;
      }
    }
  }
}
</style>
