const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
  context: resolve(__dirname, './src'),
  entry: { index: ['babel-polyfill', './index.jsx'] },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.jsx?$/,
      },
      {
        loader: 'file-loader?name=img/[name].[hash].[ext]',
        test: /\.svg$/,
      },
    ],
  },
  output: {
    filename: 'js/[name].[hash].js',
    path: resolve(__dirname, './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      minify: {
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        decodeEntities: true,
        html5: true,
      },
      template: 'html.ejs',
    }),
  ],
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
};
