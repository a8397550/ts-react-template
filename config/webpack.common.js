// webpack.common.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动生成页面
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 自动清理，清理dist旧文件
const webpack = require('webpack');

module.exports = {
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'VISION-CANVAS-L',
      filename: 'index.html',
      template: 'view/index.html',
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.jsx', '.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      'react': path.resolve(__dirname, '../node_modules/react'),
      'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
      'vision-canvas-l-form-context': path.resolve(__dirname, '../node_modules/vision-canvas-l-form-context'),
    }
  },
  module: {
    rules: [
      { test: /\.(tsx|ts)?$/, loader: 'ts-loader', options: { allowTsInNodeModules: true } },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: { loader: 'babel-loader', },
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ],
  }
};
