import React, {Component} from 'react'
import {Link} from 'react-router'

import posts from 'app/utils/posts'

class Root extends Component {
  state = {
    posts
  }

  render () {
    const links = this.state.posts.map((post) => {
      return (
        <li key={post.slug}>
          <Link to={`/posts/${post.slug}`}>{post.title}</Link>
        </li>
      )
    })

    return (
      <header>
        <nav>
          <ul>
            {links}
          </ul>
        </nav>
      </header>
    )
  }
}

export default Root
