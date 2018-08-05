export default [
  {
    parent: {
      path: 'page',
      name: 'ページ'
    },
    children: ['DOMContentLoaded', 'load', 'scroll', 'resize']
  },
  {
    parent: {
      path: 'mouse',
      name: 'マウス'
    },
    children: [
      'mouseenter',
      'mouseleave',
      'mousemove',
      'mousedown',
      'mouseup',
      'click',
      'dblclick',
      'contextmenu',
      'touchstart',
      'touchmove',
      'touchend'
    ]
  },
  {
    parent: {
      path: 'form',
      name: 'フォーム'
    },
    children: ['keydown', 'keypress', 'keyup', 'input', 'change', 'focus', 'blur', 'submit']
  },
  {
    parent: {
      path: 'media',
      name: 'メディア'
    },
    children: [
      'loadstart',
      'progress',
      'suspend',
      'emptied',
      'error',
      'loadeddata',
      'loadedmetadata',
      'canplay',
      'canplaythrough',
      'play',
      'playing',
      'timeupdate',
      'pause',
      'ended',
      'durationchange',
      'waiting',
      'seeking',
      'seeked',
      'ratechange',
      'volumechange'
    ]
  },
  {
    parent: {
      path: 'animation',
      name: 'アニメーション'
    },
    children: ['animationstart', 'animationiteration', 'animationend', 'transitionend']
  },
  {
    parent: {
      path: 'device',
      name: 'デバイス'
    },
    children: ['deviceorientation', 'devicemotion']
  }
]
