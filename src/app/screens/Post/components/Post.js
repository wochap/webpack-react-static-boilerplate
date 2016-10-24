import React from 'react'

function Post ({post}) {
  let dangerousHTML = {
    __html: post.bodyHTML
  }

  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={dangerousHTML}></div>
    </div>
  )
}

Post.propTypes = {
  post: React.PropTypes.any
}

export default Post
