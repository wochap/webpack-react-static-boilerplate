import React from 'react'
import {Router, browserHistory} from 'react-router'
import routes from 'app/config/routes'

const Root = () => {
  return (
    <Router history={browserHistory} routes={routes}></Router>
  )
}

export default Root
