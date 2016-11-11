import {applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

const debug = process.env.NODE_ENV === 'development'

const middlewares = debug ? compose(
    applyMiddleware(thunk, promiseMiddleware()),
    // redux dev tools
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ) : compose(
    applyMiddleware(thunk, promiseMiddleware())
  )

export default middlewares
