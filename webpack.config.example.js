var path = require('path')

module.exports = {
  entry: './examples/app.js',
  output: {
    path: path.resolve(__dirname, '/'),
    filename: 'bundle.js',
    publicPath: path.resolve(__dirname, '/')
  },
  devtool: '#eval',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}
