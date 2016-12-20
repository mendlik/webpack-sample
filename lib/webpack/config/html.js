import HtmlWebpackPlugin from 'html-webpack-plugin';

const buildHtmlPlugin = opts =>
  new HtmlWebpackPlugin({
    template: 'index.html',
    chunksSortMode: 'dependency',
    config: opts.appConfig,
    inject: false,
    minify: opts.optimize ? {
      caseSensitive: true,
      collapseWhitespace: true,
      removeComments: true
    } : false
  });

const buildHtmlConfig = opts => ({
  plugins: [
    buildHtmlPlugin(opts)
  ]
});

export default buildHtmlConfig;
