import React from 'react'
import {Router, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import {AppContainer} from 'react-hot-loader'
import routes from 'app/config/routes'

function App ({store}) {
  return (
    <AppContainer>
      <Provider store={store}>
        <Router history={browserHistory} routes={routes}></Router>
      </Provider>
    </AppContainer>
  )
}

App.propTypes = {
  store: React.PropTypes.object.isRequired
}

export default App
