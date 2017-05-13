module.exports = {
  entry: './app.js',
  output: './bundle.js',
  module: {
    loaders: [{
      test: /\.jsx?/,
      loader: 'babel-loader'
    }, {
      test: /\.s?css/,
      loaders: [
        'style-loader',
        'css-loader?modules',
        'postcss-loader?autoprefixer',
        'sass-loader'
      ] 
    }]
  }
}