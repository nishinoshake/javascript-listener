<template>
  <header class="header">
    <h1 class="header-logo"><nuxt-link to="/"><span>JavaScript</span>のイベントを<br class="sp">たくさん見られるサイト</nuxt-link></h1>
    <nav class="header-nav">
      <ul class="header-nav-list">
        <li v-for="m in mokuji" :key="m.parent.path" class="header-nav-item">
          <nuxt-link :to="`/${m.parent.path}/`">{{ m.parent.name }}</nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="header-select">
      <select
        ref="select"
        @input="e => changePage(e.target.value)"
      >
        <option value="">イベントを選ぶ</option>
        <option
          v-for="m in mokuji"
          :key="m.parent.path"
          :value="m.parent.path"
        >{{ m.parent.name }}</option>
      </select>
    </div>
  </header>
</template>

<script>
import mokuji from '@/config/mokuji'

export default {
  data() {
    return {
      mokuji
    }
  },
  methods: {
    changePage(path) {
      this.$refs.select.value = ''
      this.$router.push(`/${path}/`)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  z-index: 1;
  padding: 3.3rem 2rem 4rem;
  background-color: $color-white;
  @include min {
    padding: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }
  &-logo {
    margin-bottom: 2rem;
    font-size: 2rem;
    letter-spacing: 0.15em;
    line-height: 1.7;
    @include min {
      margin: 0 -0.3rem 3.2rem 0;
      font-size: 2rem;
      line-height: 1;
    }
  }
  &-nav {
    @include max {
      display: none;
    }
    &-list {
      display: flex;
      align-items: center;
      margin: -0.8rem -1.2rem;
    }
    &-item {
      a {
        display: block;
        position: relative;
        z-index: 0;
        padding: 0.8rem 1.2rem;
        font-size: 2rem;
        letter-spacing: 0.04em;
      }
    }
  }
  &-select {
    max-width: 26.5rem;
    overflow: hidden;
    position: relative;
    background-color: $color-white;
    border: 2px solid $color-dark;
    border-radius: 0.4rem;
    &:after {
      content: '';
      width: 0;
      height: 0;
      right: 1rem;
      border-style: solid;
      border-width: 8px 6px 0 6px;
      border-color: $color-dark transparent transparent transparent;
      @include center-vertical;
    }
    @include min {
      display: none;
    }
    select {
      width: 110%;
      display: block;
      padding: 0.7rem 0.9rem;
      font-size: 1.6rem;
      background: none;
      outline: none;
      box-shadow: none;
      border: 0;
      appearance: none;
      @include font-serif;
    }
  }
}
</style>
