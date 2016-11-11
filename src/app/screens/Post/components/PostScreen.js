import React from 'react'
import {connect} from 'react-redux'
import Post from './Post'
import {getPost} from 'app/reducers/posts'
import {fetchPost} from 'app/actions/posts'

class PostScreen extends React.Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired,
    fetchPost: React.PropTypes.func.isRequired,
    post: React.PropTypes.object
  }

  componentDidMount () {
    this.props.fetchPost(this.props.params.slug)
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.params.slug !== nextProps.params.slug) {
      this.props.fetchPost(nextProps.params.slug)
    }
  }

  render () {
    if (!this.props.post || !this.props.post.bodyHTML) return <h1>Loading post...</h1>
    return <Post post={this.props.post}/>
  }
}

function mapStateToProps (state, ownProps) {
  return {
    post: getPost(state, ownProps.params.slug)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPost: (fileName) => dispatch(fetchPost(fileName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen)
