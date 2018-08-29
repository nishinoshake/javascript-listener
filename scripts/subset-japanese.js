const jsdom = require('jsdom')
const fs = require('fs')
const { JSDOM } = jsdom
const { Nuxt, Builder } = require('nuxt')

const routes = ['/', '/page/', '/mouse/', '/form/', '/media/', '/animation/', '/device/', '/about/', '/coding/']
const subsetPath = './scripts/subset.txt'
const japaneseRegex = /^[\u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf]$/

const config = require('../nuxt.config.js')
const nuxt = new Nuxt(config)

const listen = async function() {
  await new Builder(nuxt).build()
  await nuxt.listen(4000, 'localhost')
}

const scrape = async function() {
  let text = ''

  for (let route of routes) {
    console.log(route)
    console.log(nuxt)
    const { html } = await nuxt.renderRoute(route)
    const dom = new JSDOM(html)

    text += dom.window.document.body.textContent
  }

  return text
}

const subsetJapanese = text =>
  text
    .split('')
    .filter(str => japaneseRegex.test(str))
    .filter((str, i, self) => self.indexOf(str) === i)
    .join('')

const main = async function() {
  await listen()

  const text = await scrape()

  const japanese = subsetJapanese(text)

  fs.writeFileSync(subsetPath, japanese)

  nuxt.close()
}

main()
