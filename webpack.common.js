const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';


module.exports = {
  entry: {
    index: './src/index.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.css'],
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@images': path.resolve(__dirname, './src/images'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@reducers': path.resolve(__dirname, './src/reducers'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@middlewares': path.resolve(__dirname, './src/middlewares'),
      '@actions': path.resolve(__dirname, './src/actions')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: { fix: false }
        }
      },
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      }, {
        test: /\.css$/,
        loader: [
          'style-loader',
          'css-loader', // 会先执行css-loader
        ],
      }, {
        test: /\.less?/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: devMode,
              publicPath: '../'
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
          },
          'less-loader'
        ]
      }, {
        test: /\.(png|svg|jpg|gif|mp4)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'images/[name].[ext]',
              limit: 20 * 1024
            }
          }
        ]
      }
    ]
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       lib1: {
  //         chunks: "initial",
  //         enforce: true
  //       }
  //     }
  //   }
  // }
}