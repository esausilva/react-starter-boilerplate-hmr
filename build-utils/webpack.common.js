const commonPaths = require('./common-paths');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  output: {
    path: commonPaths.outputPath,
    publicPath: '/',
  },
  target: 'web',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: /[\\/]node_modules[\\/]semantic-ui-([\S]+)[\\/]/,
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `public/index.html`,
      favicon: `public/favicon.ico`,
    }),
  ],
};

module.exports = config;
