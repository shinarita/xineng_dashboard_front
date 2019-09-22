const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    open: true,
    port: 8081,
    historyApiFallback: true,
    proxy: [
      {
        context: '/api/',
        target: 'https://virtserver.swaggerhub.com/huangloong/XiNeng/1.0.0/',
        secure: false,
        changeOrigin: true
      }
    ]
  }
});