import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import appConfig from './src/config';

const htmlPlugin = () =>
  new HtmlWebpackPlugin({
    template: 'index.html',
    config: appConfig,
    inject: false,
    minify: {
      caseSensitive: true,
      collapseWhitespace: true,
      removeComments: true
    }
  });

const definePlugin = () =>
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  });

const uglifyPlugin = () =>
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false }
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
    publicPath: '/',
    filename: 'main-[chunkhash].js'
  },
  plugins: [
    htmlPlugin(),
    definePlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    uglifyPlugin()
  ]
};
