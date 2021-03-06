/**
 * 公共配置
 */
const path = require('path');
const webpack = require('webpack');
const pkg = require('../package.json');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
//    entry: {
//     app: ["babel-polyfill"]
// },
  // 加载器
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                },
              },
            ],
            less: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                },
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          postLoaders: {
            html: 'babel-loader?sourceMap'
          },
          sourceMap: false,
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          sourceMap: false,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: false,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            },
          },
          {
            loader: '\'autoprefixer-loader\'',
          },
        ]
      },
      {
        test: /\.less$/,
        loaders: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: false,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: false,
            },
          },
        ]
      },
      {
        test: /\.scss$/,
        loaders: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: false,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            },
          },
        ]
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(html|tpl)$/,
        loader: 'html-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'iCode': '../examples/components/code.vue',
    }
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env.VERSION': `'${pkg.version}'`
    }),
  ]
};
