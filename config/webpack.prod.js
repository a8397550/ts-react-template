const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path')
const webpack = require('webpack');

module.exports = merge(common, {
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.BASE_NODE': '"local"' })
  ],
  entry: {
    app: path.join(__dirname, '../src/index.tsx'),
  },
  mode: 'production',
  devtool: false,
  devServer: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, './https/cert.key')),
      cert: fs.readFileSync(path.resolve(__dirname, './https/cert.crt')),
    },
    hot: true,
  }
});
