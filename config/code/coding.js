export const scroll = `
var isRunning = false

window.addEventListener('scroll', function() {
  // 呼び出されるまで何もしない
  if (!isRunning) {
    isRunning = true

    // 描画する前のタイミングで呼び出してもらう
    window.requestAnimationFrame(function() {

      // ここでなにか処理をする
      console.log(window.pageYOffset)

      isRunning = false
    })
  }
})
`

export const mouse = `
var isDragging = false
var startPosition = null
var lastPosition = null
var requestId = null

var circle = document.getElementById('circle')

var translate = function(x, y) {
  circle.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)'
}

// この関数で描画する
var animate = function() {
  var x = lastPosition.x - startPosition.x
  var y = lastPosition.y - startPosition.y

  translate(x, y)

  requestId = window.requestAnimationFrame(animate)
}

// 最後にリセット
var leave = function() {
  isDragging = false
  translate(0, 0)

  // もう呼んでほしくないのでキャンセル
  if (requestId) {
    window.cancelAnimationFrame(requestId)
  }
}

// 円上でマウスが押されたらアニメーション開始
circle.addEventListener('mousedown', function(e) {
  isDragging = true
  startPosition = { x: e.clientX, y: e.clientY }
  lastPosition = { x: e.clientX, y: e.clientY }

  animate()
})

// 動いてるときは座標を更新して
circle.addEventListener('mousemove', function(e) {
  if (isDragging) {
    lastPosition = { x: e.clientX, y: e.clientY }
  }
})

// 離れたら手を引く
circle.addEventListener('mouseup', function(e) {
  leave()
})

circle.addEventListener('mouseleave', function(e) {
  leave()
})
`
