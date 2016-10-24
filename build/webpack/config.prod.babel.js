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
    chunkFilename: 'static/js/[name].[id].chunk.js'
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
    // OccurrenceOrderPlugin is needed for long-term caching to work properly
    // see http://mxs.is/googmv
    new webpack.optimize.OccurrenceOrderPlugin(),
    // merge all duplicate modules
    new webpack.optimize.DedupePlugin(),
    // minify and optimize the javaScript
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false
      }
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
    // extract the CSS into a separate file
    new ExtractTextPlugin('static/css/[name].css')
  ]
})
