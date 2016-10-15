import React, {Component} from 'react'

import asyncLoadPost from 'app/utils/asyncLoadPost'

class PostScreen extends Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired
  }

  state = {
    body: {
      __html: null
    }
  }

  componentWillMount () {
    let postSlug = this.props.params.slug
    this.fetchPost(postSlug)
  }

  componentWillReceiveProps (nextProps) {
    let postSlug = nextProps.params.slug
    this.fetchPost(postSlug)
  }

  fetchPost = (postSlug) => {
    asyncLoadPost(postSlug, (post) => {
      this.setState({
        body: {
          __html: post.body
        }
      })
    })
  }

  render () {
    return (
      <div>
        <h2>PostScreen</h2>
        <div dangerouslySetInnerHTML={this.state.body}></div>
      </div>
    )
  }
}

export default PostScreen
