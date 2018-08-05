export const deviceorientation = `
window.addEventListener('deviceorientation', function(e) {
  console.log(e.alpha) // z軸 0 〜 360
  console.log(e.beta)  // x軸 -180 〜 180
  console.log(e.gamma) // y軸 -90 〜 90
})
`

export const devicemotion = `
window.addEventListener('devicemotion', function(e) {
  console.log(e.acceleration.x) // x軸
  console.log(e.acceleration.y) // y軸
  console.log(e.acceleration.z) // z軸
})
`
