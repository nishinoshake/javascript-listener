export const DOMContentLoaded = `
document.addEventListener('DOMContentLoaded', function(e) {
  console.log('DOMの操作ができます')
})
`

export const load = `
window.addEventListener('load', function(e) {
  console.log('リソースの読み込みが終わりました')
})
`

export const beforeunload = `
document.addEventListener('beforeunload', function(e) {
  e.returnValue = '本当にページから離れていいですか？'
})
`

export const unload = `
window.addEventListener('load', function(e) {
  console.log('ありがとうございました')
})
`

export const scroll = `
window.addEventListener('scroll', function(e) {
  console.log(window.pageYOffset)
})
`

export const resize = `
window.addEventListener('resize', function(e) {
  console.log(window.innerWidth, window.innerHeight)
})
`

export const Event = `
/*=== よく使うプロパティ ===*/

// イベントの名前
console.log(e.type)

// イベントが発生した要素への参照
console.log(e.target)

// イベントが登録されている要素への参照
console.log(e.currentTarget )

/*=== よく使うメソッド ===*/

// ブラウザによる規定のアクションをキャンセルする
e.preventDefault()

// イベントの伝播を止める
e.stopPropagation()
`
