module.exports = {
  head: {
    title: 'JavaScriptのイベントをたくさん見られるサイト',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'theme-color',
        content: '#ffffff'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:image',
        content: 'https://listener.noplan.cc/images/og.png?d=2018080705'
      },
      {
        property: 'og:site_name',
        content: 'JavaScriptのイベントをたくさん見られるサイト'
      },
      {
        property: 'og:image',
        content: 'https://listener.noplan.cc/images/og.png?d=2018080705'
      }
    ],
    link: [
      {
        rel: 'shortcut icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://pro.fontawesome.com/releases/v5.2.0/css/regular.css',
        integrity: 'sha384-g3XsWx0Sqi7JIjLKVnwUxEvqrxTMQPIf3PN+vTdWY2AhduP/rnj0rw89v0nbD4Ro',
        crossorigin: 'anonymous'
      },
      {
        rel: 'stylesheet',
        href: 'https://pro.fontawesome.com/releases/v5.2.0/css/fontawesome.css',
        integrity: 'sha384-4eP+1rYQmuI3hxrmyE+GT/EIiNbF4R85ciN3jMpmIh+bU5Hz2IU7AdcVe+JS+AJz',
        crossorigin: 'anonymous'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto+Mono|Domine:400,700'
      }
    ]
  },
  modules: [
    [
      'nuxt-sass-resources-loader',
      ['@/assets/scss/foundation/_variables.scss', '@/assets/scss/foundation/_mixin.scss']
    ],
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-53153991-16'
      }
    ]
  ],
  router: {
    middleware: ['console', 'event-remover'],
    scrollBehavior(to, from, savedPosition) {
      let position = { x: 0, y: 0 }

      if (savedPosition) {
        position = savedPosition
      }

      return new Promise(resolve => {
        window.$nuxt.$once('triggerScroll', () => {
          if (to.hash && document.querySelector(to.hash)) {
            position = { selector: to.hash, offset: { x: 0, y: 40 } }
          }
          resolve(position)
        })
      })
    }
  },
  plugins: [{ src: '~plugins/vue-highlightjs', ssr: false }, { src: '~plugins/inject-component' }],
  css: ['@/assets/scss/index.scss'],
  loading: false,
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
