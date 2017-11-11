import path from 'path';
import { mergeWith } from 'lodash';
import buildAssetsConfig from './assets';
import buildScriptsConfig from './scripts';
import buildStylesConfig from './styles';
import buildHtmlConfig from './html';

const configBuilders = [
  buildAssetsConfig,
  buildScriptsConfig,
  buildStylesConfig,
  buildHtmlConfig
];

const filterEmpty = arr => arr.filter(i => !!i);
const srcPath = path.resolve(process.cwd(), 'src');

const mergeConfigs = (a, b) =>
  mergeWith({}, a, b, (av, bv) => (
    Array.isArray(av) ?
      av.concat(bv) :
      undefined
  ));

const normalizeConfig = config =>
  Object.assign(config, {
    plugins: filterEmpty(config.plugins || []),
    module: Object.assign(config.module, {
      loaders: filterEmpty(config.module.loaders || [])
    })
  });

const buildStatsOptions = () => ({
  children: false,
  // Show only js and css assets
  // See: https://regexr.com/3h3ub
  excludeAssets: /\.(?!js$|css$).+$/
});

const buildHashOptions = (opts) => {
  const hashOpts = opts.hash;
  if (!hashOpts) return {};
  return {
    hashDigestLength: hashOpts.length,
    hashFunction: hashOpts.algorithm,
    hashDigest: hashOpts.digest
  };
};

const buildDevServerOptions = opts =>
  Object.assign({ stats: buildStatsOptions() }, opts.devServer);

const buildEntryPoint = (fileName, opts) =>
  filterEmpty([
    opts.watch && 'react-hot-loader/patch',
    fileName
  ]);

const buildConfigBase = opts => ({
  context: srcPath,
  devtool: opts.sourceMaps && 'cheap-module-source-map',
  devServer: buildDevServerOptions(opts),
  stats: buildStatsOptions(),
  entry: {
    main: buildEntryPoint('./main.js', opts),
    vendor: buildEntryPoint('./vendor.js', opts)
  },
  output: Object.assign({
    path: path.resolve(opts.target),
    publicPath: '/',
    filename: opts.hash ? '[name]-[chunkhash].js' : '[name].js',
    chunkFilename: opts.hash ? '[name]-[chunkhash].js' : '[name].js'
  }, buildHashOptions(opts)),
  resolve: {
    extensions: ['.js', '.json', '.scss', '.css'],
    modules: [
      srcPath,
      'node_modules'
    ]
  }
});

const buildConfigFromParts = opts =>
  configBuilders.reduce(
    (result, builder) => mergeConfigs(result, builder(opts)),
    buildConfigBase(opts)
  );

const buildConfig = opts =>
  normalizeConfig(buildConfigFromParts(opts));

export default buildConfig;
