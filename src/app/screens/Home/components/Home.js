import React from 'react'
import {Link} from 'react-router'
import Helmet from 'react-helmet'

function Home ({posts}) {
  const links = posts.map((post) => (
    <li key={post.frontMatter.slug}>
      <Link to={`/posts/${post.frontMatter.slug}`}>{post.frontMatter.title}</Link>
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

Home.propTypes = {
  posts: React.PropTypes.array.isRequired
}

export default Home
