module.exports = {
  entry: ['./src/main.js'],
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: ['babel-loader'],
      exclude: /node_modules/,
      query: {
        presets: [
          ['env', { useBuiltIns: true }],
          'react'
        ]
      }
    }]
  },
  devtool: 'inline-source-map'
}
