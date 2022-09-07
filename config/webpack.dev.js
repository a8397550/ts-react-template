const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path')
const webpack = require('webpack');
const fs = require('fs')

module.exports = merge(common, {
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.BASE_NODE': '"local"' })
  ],
  entry: { app: path.join(__dirname, '../src/index.tsx'), },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: { directory: path.join(__dirname, '../public'), },
    https: {
      key: fs.readFileSync(path.resolve(__dirname, './https/cert.key')),
      cert: fs.readFileSync(path.resolve(__dirname, './https/cert.crt')),
    },
    hot: true,
  }
});
