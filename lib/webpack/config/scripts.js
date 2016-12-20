import webpack from 'webpack';
import WebpackChunkHash from 'webpack-chunk-hash';
import InlineManifestWebpackPlugin from 'inline-manifest-webpack-plugin';

const definePlugin = opts =>
  new webpack.DefinePlugin({
    // Build optimization
    // https://webpack.github.io/docs/usage-with-bower.html#prefer-modules-from-npm-over-bower
    'process.env.NODE_ENV': opts.optimize ? '"production"' : '"development"'
  });

const buildInlineManifestPlugin = () =>
  new InlineManifestWebpackPlugin({
    name: 'webpackManifest'
  });

const buildUglifyPlugin = () =>
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false }
  });

const buildChunkHashPlugin = () =>
  new WebpackChunkHash({ algorithm: 'md5' });

const buildCommonsChunkPlugin = () =>
  new webpack.optimize.CommonsChunkPlugin({
    name: ['vendor', 'manifest'],
    minChunks: Infinity
  });

const buildScriptsConfig = opts => ({
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    definePlugin(opts),
    buildCommonsChunkPlugin(),
    !opts.watch && opts.hash && buildChunkHashPlugin(),
    !opts.watch && buildInlineManifestPlugin(),
    !opts.watch && new webpack.optimize.DedupePlugin(),
    !opts.watch && new webpack.optimize.OccurenceOrderPlugin(),
    opts.optimize && buildUglifyPlugin()
  ]
});

export default buildScriptsConfig;
