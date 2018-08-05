export const keydown = `
document.getElementById('text').addEventListener('keydown', function(e) {
  console.log(e.target.value, e.key)
})
`

export const keypress = `
document.getElementById('text').addEventListener('keypress', function(e) {
  console.log(e.target.value, e.key)

  // テキストボックスがひとつしかないときに、
  // Enterでsubmitさせたくないとき。
  if (e.key === 'Enter') {
    e.preventDefault()
  }
})
`

export const keyup = `
document.getElementById('text').addEventListener('keyup', function(e) {
  console.log(e.target.value, e.key)
})
`

export const input = `
document.getElementById('text').addEventListener('input', function(e) {
  console.log(e.target.value)
})
`

export const change = `
document.getElementById('select').addEventListener('change', function(e) {
  console.log(e.target.value)
})
`

export const focus = `
document.getElementById('select').addEventListener('focus', function(e) {
  console.log(e.target.value)
})
`

export const blur = `
document.getElementById('select').addEventListener('blur', function(e) {
  console.log(e.target.value)
})
`

export const submit = `
document.getElementById('form').addEventListener('submit', function(e) {
  console.log(e)

  // バリデーションのエラーとかでsubmitさせたくないとき
  e.preventDefault()
})
`

export const FocusEvent = `
/*=== よく使うプロパティ ===*/

// focusの場合、そのfocusイベントによってfocusを失った要素への参照
console.log(e.relatedTarget)
`

export const KeyboardEvent = `
/*=== よく使うプロパティ ===*/

// 押されたキーを表す文字
console.log(e.key)

// Altキーが押されているか
console.log(e.altKey)

// Ctrlキーが押されているか
console.log(e.ctrlKey )

// Shiftキーが押されているか
console.log(e.shiftKey )

// Metaキー(MacはCommand、Windowsは窓のやつ)が押されているか
console.log(e.metaKey )
`
