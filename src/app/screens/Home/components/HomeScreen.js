import React from 'react'
import {Link} from 'react-router'
import Helmet from 'react-helmet'

function HomeScreen (props) {
  const links = props.posts.map((post) => (
    <li key={post.slug}>
      <Link to={`/posts/${post.slug}`}>{post.title}</Link>
    </li>
  ))

  return (
    <div>
      <Helmet
        title='Home'
      />
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
  posts: React.PropTypes.array
}

export default HomeScreen
