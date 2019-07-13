const commonPaths = require('./common-paths');

const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  mode: 'production',
  entry: {
    app: [`${commonPaths.appEntry}/index.js`],
  },
  output: {
    filename: 'static/[name].[hash].js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localsConvention: 'camelCase',
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[hash].css',
    }),
  ],
};

module.exports = config;
