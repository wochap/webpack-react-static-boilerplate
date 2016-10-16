import React, {PropTypes} from 'react'
import {Link} from 'react-router'

function HomeScreen (props) {
  const links = props.posts.map((post) => (
    <li key={post.slug}>
      <Link to={`/posts/${post.slug}`}>{post.title}</Link>
    </li>
  ))

  return (
    <div>
      <h1>HomeScreen</h1>
      <nav>
        <ul>
          {links}
        </ul>
      </nav>
    </div>
  )
}

HomeScreen.propTypes = {
  posts: PropTypes.array
}

export default HomeScreen
