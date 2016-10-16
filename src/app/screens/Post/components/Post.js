import React, {PropTypes} from 'react'

function Post ({post}) {
  if (!post) return <div>loading post...</div>

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
  post: PropTypes.any
}

export default Post
