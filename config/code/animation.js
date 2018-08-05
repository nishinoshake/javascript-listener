export const transitionend = `
document.getElementById('transition').addEventListener('transitionend', function(e) {
  console.log(e)
})
`

export const animationstart = `
document.getElementById('animation').addEventListener('animationstart', function(e) {
  console.log(e)
})
`

export const animationiteration = `
document.getElementById('animation').addEventListener('animationiteration', function(e) {
  console.log(e)
})
`

export const animationend = `
document.getElementById('animation').addEventListener('animationend', function(e) {
  console.log(e)
})
`

export const TransitionEvent = `
/*=== よく使うプロパティ ===*/

// トランジションに関連したCSSプロパティ名
console.log(e.propertyName)

// トランジションが走った時間
console.log(e.elapsedTime)
`

export const AnimationEvent = `
/*=== よく使うプロパティ ===*/

// アニメーション名
console.log(e.animationName )

// アニメーションが走った時間
console.log(e.elapsedTime)
`
