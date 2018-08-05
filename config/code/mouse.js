export const MouseEvent = `
/*=== よく使うプロパティ ===*/

// スクリーン上でのXY
console.log(e.screenX)
console.log(e.screenY)

// ブラウザ上でのXY
console.log(e.clientX)
console.log(e.clientY)

// ページ上でのXY
console.log(e.pageX)
console.log(e.pageY)

// イベントが発生した要素からのXY
console.log(e.offsetX)
console.log(e.offsetY)
`

export const TouchEvent = `
/*=== よく使うプロパティ ===*/

// 現在のイベントに関する指の情報
console.log(e.changedTouches)

// 1本目の指の情報
console.log(e.changedTouches[0])

// 1本目の指のブラウザ上の座標
console.log(e.changedTouches[0].clientX)
console.log(e.changedTouches[0].clientY)
`

export const mouseenter = `
document.getElementById('hover').addEventListener('mouseenter', function(e) {
  console.log(e.pageX, e.pageY, e.clientX, e.clientY, e.offsetX, e.offsetY)
})
`

export const mousemove = `
document.getElementById('hover').addEventListener('mousemove', function(e) {
  console.log(e.pageX, e.pageY, e.clientX, e.clientY, e.offsetX, e.offsetY)
})
`

export const mouseleave = `
document.getElementById('hover').addEventListener('mouseleave', function(e) {
  console.log(e.pageX, e.pageY, e.clientX, e.clientY, e.offsetX, e.offsetY)
})
`

export const mousedown = `
document.getElementById('clickable').addEventListener('mousedown', function(e) {
  console.log(e.pageX, e.pageY, e.clientX, e.clientY, e.offsetX, e.offsetY)
})
`

export const mouseup = `
document.getElementById('clickable').addEventListener('mouseup', function(e) {
  console.log(e.pageX, e.pageY, e.clientX, e.clientY, e.offsetX, e.offsetY)
})
`

export const click = `
document.getElementById('clickable').addEventListener('click', function(e) {
  console.log(e.pageX, e.pageY, e.clientX, e.clientY, e.offsetX, e.offsetY)
})
`

export const dblclick = `
document.getElementById('clickable').addEventListener('dblclick', function(e) {
  console.log(e.pageX, e.pageY, e.clientX, e.clientY, e.offsetX, e.offsetY)
})
`

export const contextmenu = `
document.getElementById('clickable').addEventListener('contextmenu', function(e) {
  console.log(e.pageX, e.pageY, e.clientX, e.clientY, e.offsetX, e.offsetY)
  alert('できるだけ右クリックは禁止しないでください！')
  e.preventDefault() // 右クリックさせたくない場合
})
`

export const touchstart = `
document.getElementById('touch').addEventListener('touchstart', function(e) {
  console.log(e.changedTouches[0]) // 1本目の指の位置情報など
})
`

export const touchmove = `
document.getElementById('touch').addEventListener('touchmove', function(e) {
  console.log(e.changedTouches[0]) // 1本目の指の位置情報など
  e.preventDefault() // スクロールさせない場合
})
`

export const touchend = `
document.getElementById('touch').addEventListener('touchend', function(e) {
  console.log(e.changedTouches[0]) // 1本目の指の位置情報など
})
`
