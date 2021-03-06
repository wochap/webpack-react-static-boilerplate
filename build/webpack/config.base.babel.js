import path from 'path'

import {projectRootPath} from '../config'

export default {
  debug: true,
  noInfo: true,
  output: {
    path: path.join(projectRootPath, 'dist')
  },
  resolve: {
    extensions: ['', '.js'],
    alias: {
      'src': path.join(projectRootPath, 'src'),
      'app': path.join(projectRootPath, 'src/app'),
      'styles': path.join(projectRootPath, 'src/styles')
    },
    modulesDirectories: ['node_modules', 'shared']
  },
  resolveLoader: {
    // register custom loaders
    alias: {
      'markdown-loader': path.resolve(__dirname, './custom-loaders/markdown-loader'),
      'front-matter-loader': path.resolve(__dirname, './custom-loaders/front-matter-loader'),
      'bundle-loader': path.resolve(__dirname, './custom-loaders/bundle-loader')
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        include: projectRootPath,
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: projectRootPath,
        exclude: /node_modules/
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'static/img/[name].[ext]'
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'static/fonts/[name].[ext]'
        }
      }, {
        test: /\.ico$/,
        loader: 'file-loader',
        query: {
          name: '[name].ico'
        }
      },
      // here we split posts in n chunks
      {
        test: /\.md$/,
        loaders: ['bundle-loader?lazy', 'markdown-loader']
      }
    ]
  },
  eslint: {
    configFile: path.join(projectRootPath, '.eslintrc.js')
  },
  postcss: [
    require('autoprefixer')({browsers: ['last 2 versions']})
  ]
}
