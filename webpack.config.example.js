let path = require('path')

module.exports = {
  entry: './examples/app.js',
  output: {
    path: path.resolve(__dirname, '/'),
    publicPath: path.resolve(__dirname, '/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
