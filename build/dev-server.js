// express server with webpack middlewares

process.env.NODE_ENV = 'development'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import history from 'connect-history-api-fallback'
import chalk from 'chalk'
import express from 'express'

import webpackConfigDev from './webpack/config.dev.babel'
import {CURRENT_IP, WEBPACK_SERVER_PORT} from './config'

const app = express()

const compiler = webpack(webpackConfigDev)
const webpackMiddleware = webpackDevMiddleware(compiler, {
  publicPath: webpackConfigDev.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})
const hotMiddleware = webpackHotMiddleware(compiler)

// handle fallback for HTML5 history API
app.use(history())
app.use(webpackMiddleware)
app.use(hotMiddleware)

app.listen(WEBPACK_SERVER_PORT, '0.0.0.0', function () {
  console.log(chalk.yellow('Webpack dev-server listening at:'))
  console.log(chalk.green(`  http://localhost:${WEBPACK_SERVER_PORT}`))
  console.log(chalk.green(`  http://${CURRENT_IP}:${WEBPACK_SERVER_PORT} \n`))
})
