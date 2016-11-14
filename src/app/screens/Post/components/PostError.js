import React from 'react'
import Helmet from 'react-helmet'

function PostError ({message}) {
  return (
    <div>
      <Helmet
        title={message}
      />
      <h1>{message}</h1>
    </div>
  )
}

PostError.propTypes = {
  message: React.PropTypes.string
}

export default PostError
