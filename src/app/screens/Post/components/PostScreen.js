import React, {Component, PropTypes} from 'react'

import asyncLoadPost from 'app/utils/asyncLoadPost'

import Post from './Post'

class PostScreen extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired
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
    return (
      <div>
        <Post post={this.state.post}></Post>
      </div>
    )
  }
}

export default PostScreen
