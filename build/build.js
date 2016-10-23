// webpack prod build

process.env.NODE_ENV = 'production'

import webpack from 'webpack'
import ora from 'ora'
import path from 'path'
import shelljs from 'shelljs'

import webpackConfigProd from './webpack/config.prod.babel'
import webpackConfigProdStatic from './webpack/config.prod-static.babel'
import {projectRootPath} from './config'

let spinner = ora('Building for production...')
spinner.start()

const distFolderPath = path.join(projectRootPath, 'dist')
shelljs.rm('-rf', distFolderPath)
shelljs.mkdir('-p', distFolderPath)

webpack(webpackConfigProdStatic).run((err, stats) => {
  if (err) throw err

  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')

  webpack(webpackConfigProd).run((err, stats) => {
    spinner.stop()

    if (err) throw err

    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')

    shelljs.rm('-rf', path.join(distFolderPath, '_static'))
  })
})
