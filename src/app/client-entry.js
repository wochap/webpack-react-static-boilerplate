require('src/favicon.ico')
require('src/styles/main.scss')

import React from 'react'
import {render} from 'react-dom'
import configureStore from './config/store/configureStore'
import App from './components/App'

const initialState = window.__INITIAL_STATE__ || undefined
const store = configureStore(initialState)
const rootEl = document.getElementById('root')

render(<App store={store}/>, rootEl)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    let NextApp = require('./components/App').default

    render(<NextApp store={store}/>, rootEl)
  })
}
