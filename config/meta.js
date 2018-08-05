const SITE_TITLE = 'JavaScriptのイベントをたくさん見られるサイト'
const SITE_DESCRIPTION =
  'JavaScriptでよく使うイベントの概要をざっくりまとめ、それぞれのイベントオブジェクトをコンソールで確認できるサイトです。'

const pageTitle = text => `${text} | ${SITE_TITLE}`
const pageDescription = text => `${text}${SITE_DESCRIPTION}`

const meta = {
  index: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION
  },
  error_404: {
    title: '404 Not Found',
    description: SITE_DESCRIPTION
  },
  about: {
    title: pageTitle('このサイトについて'),
    description: pageDescription('このサイトについての説明ページです。')
  },
  coding: {
    title: pageTitle('実装の悩みどころ'),
    description: pageDescription('イベントの実装の悩には悩みどころが多いです。')
  },
  page: {
    title: pageTitle('ページ'),
    description: pageDescription('ページに関するイベントのページです。')
  },
  mouse: {
    title: pageTitle('マウス'),
    description: pageDescription('マウスやタッチに関するイベントのページです。')
  },
  form: {
    title: pageTitle('フォーム'),
    description: pageDescription('フォームに関するイベントのページです。')
  },
  media: {
    title: pageTitle('メディア'),
    description: pageDescription('メディアに関するイベントのページです。')
  },
  animation: {
    title: pageTitle('アニメーション'),
    description: pageDescription('アニメーションに関するイベントのページです。')
  },
  device: {
    title: pageTitle('デバイス'),
    description: pageDescription('デバイスに関するイベントのページです。')
  }
}

const ogTitle = title => ({
  hid: 'og:title',
  name: 'og:title',
  content: title
})

const description = text => [
  {
    hid: 'description',
    name: 'description',
    content: text
  },
  {
    hid: 'og:description',
    name: 'og:description',
    content: text
  }
]

export default Object.keys(meta).reduce(
  (obj, key) => ({
    ...obj,
    [key]: {
      title: meta[key].title,
      meta: [ogTitle(meta[key].title), ...description(meta[key].description)]
    }
  }),
  {}
)
