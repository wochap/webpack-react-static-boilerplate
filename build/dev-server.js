// express server with webpack middlewares

process.env.NODE_ENV = 'development'

import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import express from 'express'

import devWebpackConfig from './webpack/config.dev.babel'
import {CURRENT_IP, WEBPACK_SERVER_PORT} from './config'

const app = express()

const compiler = webpack(devWebpackConfig)
const middleware = webpackMiddleware(compiler, {
  publicPath: devWebpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})
const hotMiddleware = webpackHotMiddleware(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

app.use(middleware)
app.use(hotMiddleware) // disply errors on browser

app.listen(WEBPACK_SERVER_PORT, '0.0.0.0', function () {
  console.log('Webpack server listening at:')
  console.log(`http://localhost:${WEBPACK_SERVER_PORT}`)
  console.log(`http://${CURRENT_IP}:${WEBPACK_SERVER_PORT} \n`)
})
