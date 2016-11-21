let path = require('path')
let builder = require('webpack-fatigue-embrace')

let options = {
  entry: './examples/app.js',
  output: {
    path: path.resolve(__dirname, '/'),
    publicPath: path.resolve(__dirname, '/')
  }
}

let wfe = new builder(options)

module.exports = wfe
