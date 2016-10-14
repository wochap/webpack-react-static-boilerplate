import webpack from 'webpack'
import webpackMerge from 'webpack-merge'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import path from 'path'

import baseWebpackConfig from './config.base.babel'
import {projectRootPath} from '../config'

export default webpackMerge(baseWebpackConfig, {
  // necessary for 'static-site-generator-webpack-plugin' works when split
  target: 'node',
  devtool: 'eval',
  entry: {
    static: path.join(projectRootPath, 'src/app/static-entry.js')
  },
  output: {
    publicPath: '/',
    filename: '_static/js/[name].js',
    chunkFilename: '_static/js/chunk.[id].js',
    // necessary for 'static-site-generator-webpack-plugin' works
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
})
