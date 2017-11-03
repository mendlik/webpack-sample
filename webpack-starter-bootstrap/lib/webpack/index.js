import 'babel-polyfill';
import buildConfig from './config';
import appConfig from '../../src/config';

const defaultOpts = {
  appConfig,
  target: './build/dist',
  extractAssets: true,
  sourceMaps: false,
  optimize: false,
  hash: true
};

const resolveOpts = opts =>
  Object.assign({}, defaultOpts, opts);

const resolveOptsAndBuildConfig = opts =>
  buildConfig(resolveOpts(opts));

export default resolveOptsAndBuildConfig;
