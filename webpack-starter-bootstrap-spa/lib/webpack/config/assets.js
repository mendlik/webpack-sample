import CopyWebpackPlugin from 'copy-webpack-plugin';

const resolveFileLoader = (assetDirName, opts) => (
  opts.hash ?
    `file-loader?name=${assetDirName}/[name]-[hash].[ext]` :
    `file-loader?name=${assetDirName}/[name].[ext]`
);

const resolveAssetLoader = (assetDirName, opts) => (
  opts.extractAssets ?
    resolveFileLoader(assetDirName, opts) :
    'url-loader?limit=1000000000'
);

const buildCopyPluginForAssets = () =>
  new CopyWebpackPlugin([
    { from: 'assets' }
  ], {
    ignore: [
      'favicons/meta.json',
      'favicons/favicons.html'
    ]
  });

const buildCopyPluginForRootFavicon = () =>
  new CopyWebpackPlugin([
    { from: 'assets/favicons/favicon.ico', to: 'favicon.ico' }
  ]);

const buildAssetConfig = opts => ({
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: resolveAssetLoader('fonts', opts)
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: resolveAssetLoader('images', opts)
      },
      {
        test: /\/src\/app\/.+\.(txt|html)$/,
        use: 'raw-loader'
      }
    ]
  },
  plugins: [
    buildCopyPluginForAssets(),
    buildCopyPluginForRootFavicon()
  ]
});

export default buildAssetConfig;
