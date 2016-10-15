require('src/favicon.ico')
require('src/styles/main.scss')

import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'

import Root from './components/Root'

const debug = process.env.NODE_ENV !== 'production'
const rootEl = document.getElementById('root')

if (debug) {
  render(
    <AppContainer>
      <Root/>
    </AppContainer>,
    rootEl
  )
} else {
  render(<Root/>, rootEl)
}

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    let NextRoot = require('./components/Root').default

    render(
      <AppContainer>
         <NextRoot/>
      </AppContainer>,
      rootEl
    )
  })
}
