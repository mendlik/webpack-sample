import webpack from 'webpack';
import WebpackChunkHash from 'webpack-chunk-hash';
import InlineManifestWebpackPlugin from 'inline-manifest-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

const definePlugin = opts =>
  new webpack.DefinePlugin({
    // Build optimization
    // https://webpack.github.io/docs/usage-with-bower.html#prefer-modules-from-npm-over-bower
    'process.env.NODE_ENV': opts.optimize ? '"production"' : '"development"',
    // Used to differ development and test environments
    __DEV: !opts.optimize,
    __TEST: false
  });

const buildInlineManifestPlugin = () =>
  new InlineManifestWebpackPlugin({
    name: 'webpackManifest'
  });

const buildChunkHashPlugin = () =>
  new WebpackChunkHash({ algorithm: 'md5' });

const buildCommonsChunkPlugin = () =>
  new webpack.optimize.CommonsChunkPlugin({
    name: ['vendor', 'manifest'],
    minChunks: Infinity
  });

const buildUglifyJsPlugin = () =>
  new UglifyJsPlugin({ cache: '.cache/uglify' });

const buildScriptsConfig = opts => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: '.cache/babel'
        }
      }
    ]
  },
  plugins: [
    definePlugin(opts),
    buildCommonsChunkPlugin(),
    !opts.watch && opts.hash && buildChunkHashPlugin(),
    !opts.watch && buildInlineManifestPlugin(),
    opts.watch && new webpack.NamedModulesPlugin(),
    !opts.watch && opts.optimize && buildUglifyJsPlugin()
  ]
});

export default buildScriptsConfig;
