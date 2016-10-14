import loadPostHtml from 'app/utils/loadPostHtml'

import React, {Component} from 'react'

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

    loadPostHtml(postSlug, (post) => {
      this.setState({
        body: {
          __html: post.body
        }
      })
    })
  }

  componentWillReceiveProps (nextProps) {
    let postSlug = nextProps.params.slug

    loadPostHtml(postSlug, (post) => {
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
