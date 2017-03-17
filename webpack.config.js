module.exports = {
  entry: './src/ReactApp.jsx',
  output: {
    path: __dirname + '/public',
    filename: 'clientBundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
};
