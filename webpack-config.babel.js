/* eslint-disable */
import optimist from 'optimist';
import buildWebpackConfig from './lib/webpack';

const modeConfigs = {
  watch: {
    extractAssets: false,
    sourceMaps: true,
    optimize: false,
    hash: false
  },
  debug: {
    extractAssets: true,
    sourceMaps: true,
    optimize: false,
    hash: true
  },
  prod: {
    extractAssets: true,
    sourceMaps: false,
    optimize: true,
    hash: true
  }
};

const mode = optimist.argv.mode || 'prod';
const config = modeConfigs[mode.toLowerCase()];

if (!config) throw new Error(`Unrecognized webpack mode: ${mode}`);
console.log(`Starting webpack in mode: ${mode}`);
console.log(`Configuration:\n${JSON.stringify(config, null, 2)}`);

export default buildWebpackConfig(config);
