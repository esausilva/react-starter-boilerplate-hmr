const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'static/bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      { 
        test: /\.(js)$/, 
        exclude: /node_modules/, 
        use: ['babel-loader'] 
      },
      { 
        test: /\.css$/, 
        use: ExtractTextPlugin.extract({ 
                fallback: 'style-loader', 
                use: [
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                      importLoaders: 1,
                      camelCase: true,
                      sourceMap: true
                    }
                  },
                  {
                    loader: 'postcss-loader'
                  }
                ]
              }) 
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({ 
      sourceMap: true, 
      comments: false 
    }),
    new HtmlWebpackPlugin({ 
      template: 'public/index.html', 
      favicon: 'public/favicon.ico' 
    }),
    new ExtractTextPlugin('styles/styles.[hash].css')
  ]
};
