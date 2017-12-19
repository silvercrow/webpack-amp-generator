const webpack = require('webpack'),
  path = require('path'),
  StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin'),
  config = {
    entry: {
      server: __dirname + '/app/index.js'
    },
    output: {
      path: __dirname + '/dist',
      filename: '[name].bundle.js',  //bundle.js
      libraryTarget: 'umd'
    },
    module: {
      rules: [{
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015', { modules: false }]
            ]
          }
        }]
      }]

    },
    plugins: [
      new StaticSiteGeneratorPlugin({
        paths: [
          '/hello/',
          '/world/'
        ],
        locals: {
          // Properties here are merged into `locals` 
          // passed to the exported render function 
          greet: 'Hello'
        }
      })],
    watch: true
  }

module.exports = config
