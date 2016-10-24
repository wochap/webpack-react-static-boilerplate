import React from 'react'
import Helmet from 'react-helmet'

import asyncLoadPost from 'app/utils/asyncLoadPost'

import Post from './Post'

class PostScreen extends React.Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired
  }

  state = {
    post: null
  }

  componentWillMount () {
    let postSlug = this.props.params.slug
    if (window.INITIAL_POST && window.INITIAL_POST.frontmatter.slug === postSlug) {
      this.setState({post: window.INITIAL_POST})
    } else {
      this.getPost(postSlug)
    }
  }

  componentWillReceiveProps (nextProps) {
    let postSlug = nextProps.params.slug
    this.setState({post: null})
    this.getPost(postSlug)
  }

  getPost = (postSlug) => {
    asyncLoadPost(postSlug, (post) => {
      this.setState({post})
    })
  }

  render () {
    if (!this.state.post) {
      return <h1>Loading post...</h1>
    }

    return (
      <div>
        <Helmet
          title={this.state.post.frontmatter.title}
        />
        <Post post={this.state.post}></Post>
      </div>
    )
  }
}

export default PostScreen
