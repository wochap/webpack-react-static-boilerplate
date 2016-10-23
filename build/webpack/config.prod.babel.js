import path from 'path'
import webpack from 'webpack'
import webpackMerge from 'webpack-merge'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

import webpackConfigBase from './config.base.babel'
import {projectRootPath} from '../config'

export default webpackMerge(webpackConfigBase, {
  devtool: 'source-map',
  entry: {
    app: path.join(projectRootPath, 'src/app/client-entry.js')
  },
  output: {
    publicPath: '/',
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/chunk.[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('css?sourceMap!postcss-loader')
      }, {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract('css?sourceMap!postcss-loader!sass?sourceMap')
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(path.join(projectRootPath, 'node_modules')) === 0
        )
      }
    }),
    new ExtractTextPlugin('static/css/[name].css'),
  ]
})
