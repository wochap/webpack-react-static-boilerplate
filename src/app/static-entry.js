/* eslint-disable */

import ReactDOMServer from 'react-dom/server'
import React from 'react'
import {match, RouterContext, createMemoryHistory} from 'react-router'

import routes from './config/routes'

// static-site-generator-webpack-plugin callback
export default function (locals, callback) {
  const history = createMemoryHistory()
  const location = history.createLocation(locals.path)

  console.log('\nCurrent path: ', locals.path)

  match({routes, location}, (error, redirectLocation, renderProps) => {
    if (error) {
      console.error('react-match ERROR: ', error)
      return
    }

    let html = ReactDOMServer.renderToString(<RouterContext {...renderProps}/>)
    let INITIAL_POST = null

    if (renderProps.params.slug) {
      // we are in post route
      INITIAL_POST = require(`!!markdown-loader!src/posts/${renderProps.params.slug}.md`)
      INITIAL_POST.frontmatter.slug = renderProps.params.slug
    }

    console.log('HTML generated: \n', html)

    callback(null, `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>{{ name }}</title>
          <link rel="stylesheet" href="/static/css/app.css" />
        </head>
        <body>
          <div id="root">
            ${html}
          </div>
          <script>window.INITIAL_POST = ${JSON.stringify(INITIAL_POST)};</script>
          <script src="/static/js/vendor.js"></script>
          <script src="/static/js/app.js"></script>
        </body>
      </html>
    `)
  })
}
