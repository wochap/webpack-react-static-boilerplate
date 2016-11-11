import React from 'react'
import ReactDOM from 'react-dom/server'

// Router
import {match, RouterContext, createMemoryHistory} from 'react-router'
import routes from './config/routes'

// Redux
import {Provider} from 'react-redux'
import configureStore from './config/store/configureStore'
import * as PostsActions from 'app/actions/posts'

import Helmet from 'react-helmet'
import {AppContainer} from 'react-hot-loader'

export default function (locals, callback) {
  const history = createMemoryHistory()
  const location = history.createLocation(locals.path)
  const store = configureStore()

  match({routes, location}, (error, redirectLocation, renderProps) => {
    if (error) return

    store.dispatch(PostsActions.fetchPosts()).then(() => {
      if (renderProps.params.slug) {
        store.dispatch(PostsActions.fetchPost(renderProps.params.slug)).then(() => {
          callback(null, renderFullPage(renderApp({store, renderProps})))
        })
      } else {
        callback(null, renderFullPage(renderApp({store, renderProps})))
      }
    })
  })
}

function renderApp ({store, renderProps}) {
  const appHTML = ReactDOM.renderToString(
    <AppContainer>
      <Provider store={store}>
        <RouterContext {...renderProps}/>
      </Provider>
    </AppContainer>
  )
  const head = Helmet.rewind()
  const initialState = store.getState()

  console.log('\nCurrent path: ', renderProps.location.pathname) // eslint-disable-line
  console.log('HTML generated: \n', appHTML) // eslint-disable-line

  return {
    appHTML,
    head,
    initialState
  }
}

function renderFullPage ({appHTML, initialState, head}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        ${head.title.toString()}
        ${head.meta.toString()}
        <link rel="stylesheet" href="/static/css/app.css" />
      </head>
      <body>
        <div id="root">
          ${appHTML}
        </div>
        <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};</script>
        <script src="/static/js/vendor.js"></script>
        <script src="/static/js/app.js"></script>
      </body>
    </html>
  `
}
