import path from 'path'
import webpack from 'webpack'
import webpackMerge from 'webpack-merge'

import webpackConfigBase from './config.base.babel'
import {projectRootPath} from '../config'

export default webpackMerge(webpackConfigBase, {
  // necessary for 'static-site-generator-webpack-plugin' works with split points
  target: 'node',
  devtool: false,
  entry: {
    static: path.join(projectRootPath, 'src/app/static-entry.js')
  },
  output: {
    publicPath: '/',
    filename: '_static/js/[name].js',
    chunkFilename: '_static/js/chunk.[id].[name].js',
    // necessary for 'static-site-generator-webpack-plugin' works with split points
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