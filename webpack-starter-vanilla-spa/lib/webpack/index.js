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

const defaultHash = {
  length: 10,
  algorithm: 'sha256',
  digest: 'hex'
};

const resolveOpts = (opts) => {
  const configWithDefaults = Object.assign({}, defaultOpts, opts);
  if (configWithDefaults.hash === true) {
    configWithDefaults.hash = defaultHash;
  }
  return configWithDefaults;
};

const resolveOptsAndBuildConfig = opts =>
  buildConfig(resolveOpts(opts));

export default resolveOptsAndBuildConfig;
