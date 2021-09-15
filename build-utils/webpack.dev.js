const commonPaths = require('./common-paths');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');

const port = process.env.PORT || 3000;

const config = {
  mode: 'development',
  entry: {
    app: [`${commonPaths.appEntry}/index.js`, 'webpack-plugin-serve/client'],
  },
  output: {
    filename: '[name].[fullhash].js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [require('react-refresh/babel')].filter(Boolean),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              esModule: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              modules: {
                mode: 'local',
                exportLocalsConvention: 'camelCaseOnly',
                namedExport: true,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin({
      overlay: { sockIntegration: 'wps' },
    }),
    new Serve({
      historyFallback: true,
      liveReload: false,
      hmr: true,
      host: 'localhost',
      port: port,
      open: true,
      static: commonPaths.outputPath,
    }),
  ],
  watch: true,
};

module.exports = config;
