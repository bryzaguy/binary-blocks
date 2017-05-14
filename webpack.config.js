module.exports = {
  entry: './src/app.js',
  output: './bundle.js',
  module: {
    loaders: [{
      test: /\.jsx?/,
      loader: 'babel-loader'
    }, {
      test: /\.s?css/,
      loaders: [
        'style-loader',
        'css-loader?modules&localIdentName=[name]-[local]',
        'postcss-loader?autoprefixer',
        'sass-loader'
      ] 
    }]
  }
}