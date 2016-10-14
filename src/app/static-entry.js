/* eslint-disable */

import ReactDOMServer from 'react-dom/server'
import React from 'react'
import {match, RouterContext, createMemoryHistory} from 'react-router'

import routes from './config/routes'

export default function (locals, callback) {
  const history = createMemoryHistory()
  const location = history.createLocation(locals.path)

  console.log('\nCurrent path: ', locals.path)

  match({routes, location}, (error, redirectLocation, renderProps) => {
    if (error) {
      console.log('react-match ERROR: ', error)
      return
    }

    let html = ReactDOMServer.renderToString(<RouterContext {...renderProps}/>)

    console.log('HTML generated: \n', html)

    callback(null, `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Gean Marroquin</title>
          <link rel="stylesheet" href="/static/css/app.css" />
        </head>
        <body>
          ${html}
          <script src="/static/js/vendor.js"></script>
          <script src="/static/js/app.js"></script>
        </body>
      </html>
    `)
  })
}
