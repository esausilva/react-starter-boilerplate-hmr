var webpack = require("webpack");
var glob = require("glob");
module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'chai', 'jquery-3.3.1'],
        preprocessors: {
            './src/**/*.js': ['webpack', 'sourcemap']
        },
        //'node_modules/babel-polyfill/dist/polyfill.js',
        files: ['./src/setupTests.js'],
        reporters: ['progress'],
        port: 9876,  // karma web server port
        colors: true,
        client: {
            mocha: {
                reporter: 'html'
            }
        },
        logLevel: config.LOG_ERROR,
        browsers: ['ChromeHeadless', 'Chrome'],
        autoWatch: false,
        // singleRun: false, // Karma captures browsers, runs the tests and exits
        concurrency: Infinity,
        plugins: [
            require("karma-webpack"),
            require("karma-sourcemap-loader"),
            require("karma-mocha"),
            require("karma-chai"),
            require("karma-chrome-launcher"),
            require("karma-jquery")

        ],
        webpack: {
            stats: 'none',
            mode: 'development',
            devtool: 'inline-source-map',
            entry: ['./src/setupTests.js'].concat(glob.sync("./src/**/*.test.js")),
            module: {
                rules: [{ test: /\.(js|es6)$/, exclude: /node_modules/, use: 'babel-loader' }, {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                camelCase: true,
                                sourceMap: true,
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        }
                    ]
                }]
            },
            resolve: {
                extensions: ['.js'],
                modules: [
                    "app",
                    "node_modules"
                ]
            },
            plugins: [
                new webpack.DefinePlugin({
                    ENV: JSON.stringify("TEST"),
                    'process.env': {
                        NODE_ENV: JSON.stringify('"test"')
                    }
                })
            ],
        },
        webpackServer: {
            noInfo: true,
            logLevel: 'error'
        }
    })
}
