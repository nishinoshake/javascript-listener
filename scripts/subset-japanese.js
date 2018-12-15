const jsdom = require('jsdom')
const path = require('path')
const fs = require('fs')
const { JSDOM } = jsdom
const { Nuxt, Builder } = require('nuxt')

const configPath = path.resolve(__dirname, '../nuxt.config.js')
const config = require(configPath)
const nuxt = new Nuxt(config)

const listen = async function() {
  await new Builder(nuxt).build()
  await nuxt.listen(4000, 'localhost')
}

const scrape = async routes => {
  const text = await Promise.all(
    routes.map(async route => {
      const { html } = await nuxt.renderRoute(route)
      const dom = new JSDOM(html)

      return dom.window.document.body.textContent
    })
  )

  return text.join('')
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
  const text = await scrape(routes)
  const japanese = subset(text, japaneseRegex)

  fs.writeFileSync(subsetPath, japanese)

  nuxt.close()
  process.exit(0)
}

main()
