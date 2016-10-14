// webpack prod build

process.env.NODE_ENV = 'production'

import webpack from 'webpack'
import ora from 'ora'
import path from 'path'
import {rm, mkdir} from 'shelljs'

import prodWebpackConfig from './webpack/config.prod.babel'
import preStaticWebpackConfig from './webpack/config.pre-static.babel'
import staticWebpackConfig from './webpack/config.static.babel'

import {projectRootPath} from './config'

let spinner = ora('Building for production...')

spinner.start()

const distFolderPath = path.join(projectRootPath, 'dist')
rm('-rf', distFolderPath)
mkdir('-p', distFolderPath)

webpack(preStaticWebpackConfig).run((err, stats) => {
  if (err) throw err

  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')

  webpack(staticWebpackConfig).run((err, stats) => {
    if (err) throw err

    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')

    webpack(prodWebpackConfig).run((err, stats) => {
      spinner.stop()

      if (err) throw err

      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n')

      rm('-rf', path.join(distFolderPath, 'dist'))
      rm('-rf', path.join(distFolderPath, '_static'))
    })
  })
})
