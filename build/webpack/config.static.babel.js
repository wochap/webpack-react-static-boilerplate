import path from 'path'
import chalk from 'chalk'
import webpack from 'webpack'
import webpackMerge from 'webpack-merge'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

import webpackConfigBase from './config.base.babel'
import {projectRootPath} from '../config'

// static build magic
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin'
import routes from '../routes'
console.log(chalk.yellow('Routes to build: \n'), routes, '\n')

export default webpackMerge(webpackConfigBase, {
  // necessary for 'static-site-generator-webpack-plugin' works when split
  target: 'node',
  devtool: false,
  entry: {
    static: path.join(projectRootPath, 'src/app/static-entry.js')
  },
  output: {
    publicPath: '/',
    filename: 'dist/_static/js/[name].js',
    chunkFilename: 'dist/_static/js/chunk.[id].js',
    // necessary for 'static-site-generator-webpack-plugin' works
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new StaticSiteGeneratorPlugin('static', routes, {}, {
      window: {}
    })
  ]
})
