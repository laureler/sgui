/**
 * 打包说明文档
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');


module.exports = merge(webpackBaseConfig, {
  devtool: 'eval-source-map',

  // 入口
  entry: {
    main: './examples/main',
    vendors: ['vue', 'vue-router']
  },
  // 输出
  output: {
    path: path.join(__dirname, '../dist/examples/static'),
    publicPath: './static/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  resolve: {
    alias: {
      sgui: '../../src/index',
      vue: 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.bundle.js' }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: path.join(__dirname, '../dist/examples/index.html'),
      template: path.join(__dirname, '../examples/index.html')
    }),
    new FriendlyErrorsPlugin()
  ]
});
