var webpack = require('webpack');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
var path = require('path');

module.exports = {
  entry: {
    'app': './src/app.ts'
  },
  output: {
    path: "./dist",
    filename: "bundle.js"
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
    ],
    noParse: [
      path.join(__dirname, 'node_modules', 'angular2', 'bundles'),
      path.join(__dirname, 'node_modules', 'zone.js', 'dist'),
      path.join(__dirname, 'node_modules', 'es6-shim')
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      mangle: true // false to get it to work
    })
  ],

  devServer: {
    historyApiFallback: true
  }
};
