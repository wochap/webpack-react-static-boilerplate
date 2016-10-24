import React from 'react'
import Helmet from 'react-helmet'

class NotFoundScreen extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title='404 NotFound'
        />
        <h1>NotFoundScreen</h1>
      </div>
    )
  }
}

export default NotFoundScreen
