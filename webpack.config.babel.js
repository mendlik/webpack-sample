import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import appConfig from './src/config';

const htmlPlugin =
  new HtmlWebpackPlugin({
    template: 'index.html',
    config: appConfig,
    inject: false
  });

export default {
  context: path.resolve('./src'),
  entry: './main.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    path: path.resolve('./build'),
    filename: 'main.js'
  },
  plugins: [
    htmlPlugin
  ]
};
