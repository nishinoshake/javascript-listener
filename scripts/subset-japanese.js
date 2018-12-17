const fs = require('fs')
const path = require('path')
const { JSDOM } = require('jsdom')
const { Nuxt, Builder } = require('nuxt')

const configPath = path.resolve(__dirname, '../nuxt.config.js')
const config = require(configPath)
const nuxt = new Nuxt(config)

const listen = async function() {
  await new Builder(nuxt).build()
  await nuxt.listen(4000, 'localhost')
}

const scrape = async route => {
  const { html } = await nuxt.renderRoute(route)
  const dom = new JSDOM(html)
  const { body } = dom.window.document

  body.querySelectorAll('script, style').forEach(el => el.remove())

  return body.textContent
}

const scrapeAll = async routes => {
  const values = await Promise.all(routes.map(route => scrape(route)))

  return values.join('')
}

const subset = (text, regex) =>
  [...text]
    .filter(str => regex.test(str))
    .filter((str, i, self) => self.indexOf(str) === i)
    .join('')

const main = async function() {
  const routes = ['/', '/page/', '/mouse/', '/form/', '/media/', '/animation/', '/device/', '/about/', '/coding/']
  const subsetPath = path.resolve(__dirname, 'subset.txt')
  const japaneseRegex = /^[\u3040-\u309f\u30a0-\u30ff\u3001-\u3007\u4e00-\u9fef\uf900-\ufaff]$/

  await listen()
  const text = await scrapeAll(routes)
  const japanese = subset(text, japaneseRegex)

  fs.writeFileSync(subsetPath, japanese)

  nuxt.close()
  process.exit(0)
}

main()
