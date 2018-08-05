let listeners = {}

// 雑
const generateKey = (target, eventName) => {
  let name

  if (target === window) {
    name = 'window'
  } else if (target === document) {
    name = 'document'
  } else if (target === document.body) {
    name = 'body'
  } else if (target.id) {
    name = target.id
  } else {
    console.warn('イベントを設定する要素にidを指定してください！')
  }

  return `${name}:${eventName}`
}

const rafCallback = key => e => {
  if (!listeners[key].isRunning) {
    listeners[key].isRunning = true
    listeners[key].rafId = requestAnimationFrame(() => {
      listeners[key].callback(e)
      listeners[key].isRunning = false
      listeners[key].rafId = null
    })
  }
}

export const addListener = (target, eventName, callback, { raf = false } = {}) => {
  const key = generateKey(target, eventName)

  listeners[key] = {
    target,
    eventName,
    callback,
    raf,
    rafCallback: null,
    rafId: null,
    isRunning: false
  }

  if (raf) {
    listeners[key].rafCallback = rafCallback(key)

    target.addEventListener(eventName, listeners[key].rafCallback)
  } else {
    target.addEventListener(eventName, callback)
  }
}

export const removeListener = key => {
  if (listeners[key]) {
    const { target, eventName, callback, raf, rafCallback, rafId } = listeners[key]

    if (raf) {
      target.removeEventListener(eventName, rafCallback)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    } else {
      target.removeEventListener(eventName, callback)
    }

    delete listeners[key]
  }
}

export const removeAllListeners = () => {
  Object.keys(listeners).forEach(key => {
    removeListener(key)
  })
}
