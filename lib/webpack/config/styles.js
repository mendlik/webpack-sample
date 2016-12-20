import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import precss from 'precss';
import path from 'path';

const appendToLoaders = (loaders, suffix) => {
  if (Array.isArray(loaders)) {
    return loaders.map(appendToLoaders);
  }
  return loaders.split('!').map((loader) => {
    const prefix = loader.indexOf('?') >= 0 ? '&' : '?';
    return `${loader}${prefix}${suffix}`;
  }).join('!');
};

const buildStyleLoader = (opts, loaders) => {
  const sourceMappedloaders = opts.sourceMaps ?
    appendToLoaders(loaders, 'sourceMap') :
    loaders;
  return opts.extractAssets ?
    ExtractTextPlugin.extract('style', sourceMappedloaders) :
    `style!${sourceMappedloaders}`;
};

// https://github.com/webpack/css-loader#css-modules
const buildCssModulesLoader = opts =>
  buildStyleLoader(
    opts,
    'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!resolve-url!sass'
  );

// https://github.com/webpack/extract-text-webpack-plugin
const buildExtractStylePlugin = opts =>
  new ExtractTextPlugin(
    opts.hash ? '[name]-[contenthash].css' : '[name].css', {
      allChunks: true
    }
  );

const buildStyleConfig = opts => ({
  module: {
    loaders: [
      {
        test: /(\.scss|\.css)$/,
        loader: buildCssModulesLoader(opts)
      }
    ]
  },
  plugins: [
    buildExtractStylePlugin(opts)
  ],
  postcss: () => [autoprefixer, precss],
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, '../../src'),
      path.resolve(__dirname, '../../node_modules')
    ]
  }
});

export default buildStyleConfig;
