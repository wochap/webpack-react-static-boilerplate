import React from 'react'
import Helmet from 'react-helmet'

function Post ({post}) {
  const dangerousHTML = {
    __html: post.bodyHTML
  }

  return (
    <div>
      <Helmet
        title={post.frontMatter.title}
      />
      <h1>{post.frontMatter.title}</h1>
      <div dangerouslySetInnerHTML={dangerousHTML}></div>
    </div>
  )
}

Post.propTypes = {
  post: React.PropTypes.object.isRequired
}

export default Post
