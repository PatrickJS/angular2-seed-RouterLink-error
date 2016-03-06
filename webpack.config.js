var webpack = require('webpack');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
var path = require('path');

module.exports = {
  devtool: 'source-map',
  debug: false,
  cache: false,
  entry: {
    'polyfills': './src/polyfills.ts',
    'no_uglify': './src/no_uglify.ts',
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
      root('node_modules/angular2/bundles/angular2-polyfills'),
      root('node_modules/angular2/bundles'),
      root('node_modules/zone.js/dist'),
      root('node_modules/zone.js/dist/zone-microtask'),
      root('node_modules/es6-shim'),
      root('node_modules/es6-promise'),
      root('node_modules/reflect-metadata')
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: ['no_uglify', 'polyfills'], filename: '[name].bundle.js', minChunks: Infinity }),
    new UglifyJsPlugin({
      exclude: [
        'no_uglify.bundle.js',
      ],
    //   // warnings: true,
    //   comments: false,
      // beautify: true,
      // compress: {
      //   sequences     : false,  // join consecutive statemets with the “comma operator”
      //   properties    : false,  // optimize property access: a["foo"] → a.foo
      //   dead_code     : false,  // discard unreachable code
      //   drop_debugger : false,  // discard “debugger” statements
      //   unsafe        : false, // some unsafe optimizations (see below)
      //   conditionals  : false,  // optimize if-s and conditional expressions
      //   comparisons   : false,  // optimize comparisons
      //   evaluate      : false,  // evaluate constant expressions
      //   booleans      : false,  // optimize boolean expressions
      //   loops         : false,  // optimize loops
      //   unused        : false,  // drop unused variables/functions
      //   hoist_funs    : false,  // hoist function declarations
      //   hoist_vars    : false, // hoist variable declarations
      //   if_return     : false,  // optimize if-s followed by return/continue
      //   join_vars     : false,  // join var declarations
      //   cascade       : false,  // try to cascade `right` into `left` in sequences
      //   side_effects  : false,  // drop side-effect-free statements
      //   global_defs   : {},
      //   keep_fnames: true
      // },
      // mangle: false // false to get it to work

    })
  ],

  devServer: {
    historyApiFallback: true
  },
  node: {
    progress: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

function rootNode(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return root.apply(path, ['node_modules'].concat(args));
}
