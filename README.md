# webpack-module-hot-accept
Tiny webpack plugin that adds `module.hot.accept` to the bottom of modules.  Use with something like [`babel-plugin-react-hot`](https://github.com/loggur/babel-plugin-react-hot).

## Installation
```
npm install webpack-module-hot-accept --save
```

## Usage
```js
// webpack.config.js

var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    './entry.js'
  ],
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['webpack-module-hot-accept']
      }
    ]
  }
};

```
