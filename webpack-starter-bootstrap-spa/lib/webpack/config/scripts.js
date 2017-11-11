import webpack from 'webpack';
import InlineManifestWebpackPlugin from 'inline-manifest-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const buildDefinePlugin = opts =>
  new webpack.DefinePlugin({
    // Build optimization
    // https://webpack.github.io/docs/usage-with-bower.html#prefer-modules-from-npm-over-bower
    'process.env.NODE_ENV': opts.optimize ? '"production"' : '"development"'
  });

const buildInlineManifestPlugin = () =>
  new InlineManifestWebpackPlugin({
    name: 'webpackManifest'
  });

const buildCommonsChunkPlugin = () =>
  new webpack.optimize.CommonsChunkPlugin({
    name: ['vendor', 'manifest'],
    minChunks: Infinity
  });

const buildUglifyJsPlugin = () =>
  new UglifyJsPlugin({ cache: '.cache/uglify' });

const buildCleanWebpackPlugin = opts =>
  new CleanWebpackPlugin(opts.target);

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
    buildDefinePlugin(opts),
    buildCommonsChunkPlugin(),
    !opts.watch && buildCleanWebpackPlugin(opts),
    !opts.watch && opts.hash && new webpack.HashedModuleIdsPlugin(),
    !opts.watch && buildInlineManifestPlugin(),
    opts.watch && new webpack.NamedModulesPlugin(),
    !opts.watch && opts.optimize && buildUglifyJsPlugin()
  ]
});

export default buildScriptsConfig;
