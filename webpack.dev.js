const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      publicPath: '/',
    },
    hot: true,
    open: true,
    historyApiFallback: true,
    compress: true,
  },
  performance: {
    hints: 'warning',
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000,
  },
});
