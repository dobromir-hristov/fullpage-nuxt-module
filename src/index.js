const { resolve } = require('path')

module.exports = async function fullPageModule (moduleOptions) {
  this.options.css.unshift('fullpage.js/dist/fullpage.css')

  this.addPlugin({
    src: resolve(__dirname, 'plugins/fullpage.client.js')
  })
  this.addPlugin({
    src: resolve(__dirname, 'plugins/fullpage.server.js')
  })
}

module.exports.meta = require('../package.json')
