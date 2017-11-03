# react-starter-boilerplate-hmr

> React Starter Boilerplate with Hot Module Replacement and Webpack 3

## Features

 - React 16
 - React Router 4
 - Semantic UI as the CSS Framework
 - Hot Module Replacement
 - CSS Autoprefixer
 - CSS Modules with SourceMap
 - Stage 1 Preset
 - Webpack 3
 - Code splitting by Route and Vendor
 - [Webpack Bundle Analyzer](https://github.com/th0r/webpack-bundle-analyzer) 
 	- Disabled by default. To enable, in webpack config then plugins, change `BundleAnalyzerPlugin` like so `new BundleAnalyzerPlugin({analyzerMode:'server'})`
 - Take a look at [package.json](https://github.com/esausilva/react-starter-boilerplate-hmr/blob/master/package.json)
 
### Usage

```
$ yarn
$ yarn start
```

### Building

```
$ yarn build
```

Will create a `dist` directory containing your compiled code.

Depending on your needs, you would probably want to do more optimization to the production build.

-Esau Silva
