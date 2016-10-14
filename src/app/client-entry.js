require('src/favicon.ico')
require('src/styles/main.scss')

import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'

import Root from './components/Root'

const rootEl = document.getElementById('root')

render(
  <AppContainer>
    <Root/>
  </AppContainer>,
  rootEl
)

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
