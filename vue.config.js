// vue.config.js
const path = require('path')

module.exports = {
  configureWebpack: {
    output: {
      path: path.resolve(__dirname, 'docs'),
      publicPath: 'https://marktext.github.io/website/'
    }
  }
}