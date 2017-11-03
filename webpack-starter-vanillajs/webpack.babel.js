/* eslint-disable */
import optimist from 'optimist';
import buildWebpackConfig from './lib/webpack';

const modes = {
  watchhot: {
    extractAssets: false,
    sourceMaps: true,
    optimize: false,
    hash: false,
    watch: true
  },
  watchreload: {
    extractAssets: true,
    sourceMaps: true,
    optimize: false,
    hash: false,
    watch: true
  },
  debug: {
    extractAssets: true,
    sourceMaps: true,
    optimize: false,
    hash: false
  },
  prod: {
    extractAssets: true,
    sourceMaps: false,
    optimize: true,
    hash: true
  }
};

const createConfig = (env = {}) => {
  const mode = env.mode || 'prod';
  const config = modes[mode.toLowerCase()];
  if (!config) throw new Error(`Unrecognized webpack mode: ${mode}`);
  console.log(`Starting webpack in mode: ${mode}`);
  console.log(`Configuration:\n${JSON.stringify(config, null, 2)}`);
  return buildWebpackConfig(config);
};

export default createConfig;
