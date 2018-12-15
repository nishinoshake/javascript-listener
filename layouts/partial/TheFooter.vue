<template>
  <footer class="footer">
    <nav class="footer-nav">
      <ul class="footer-nav-list">
        <li class="footer-nav-item"><nuxt-link to="/about/">このサイトについて</nuxt-link></li>
        <li class="footer-nav-item"><nuxt-link to="/coding/">実装の悩みどころ</nuxt-link></li>
        <li class="footer-nav-item"><a href="https://developer.mozilla.org/ja/docs/Web/Reference/Events" target="_blank">イベントリファレンス<i class="far fa-external-link"></i></a></li>
        <li class="footer-nav-item"><a href="https://github.com/noplan1989/javascript-listener" target="_blank">GitHub<i class="far fa-external-link"></i></a></li>
      </ul>
    </nav>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 3.5rem;
  position: relative;
  background-color: $color-white;
  @include min {
    padding: 6rem;
  }
  &-nav {
    &-list {
      @include min {
        display: flex;
        align-items: center;
      }
    }
    &-item {
      @include max {
        @include center-flex;
      }
      &:nth-child(n + 2) {
        @include max {
          margin-top: 2.5rem;
        }
        @include min {
          margin-left: 3rem;
        }
      }
      a {
        display: flex;
        align-items: center;
        font-size: 1.6rem;
        position: relative;
        @include min {
          padding: 1rem 0;
          font-size: 1.8rem;
        }
        i {
          padding: 0 0 0.1rem 0.6rem;
          font-size: 86%;
          @include min {
            padding: 0 0 0.3rem 0.6rem;
          }
        }
      }
    }
  }
}
</style>
