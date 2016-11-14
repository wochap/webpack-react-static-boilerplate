import React from 'react'
import {connect} from 'react-redux'
import Post from './Post'
import PostError from './PostError'
import Loading from 'components/Loading'
import {getPost, getPostError} from 'app/reducers/posts'
import {fetchPost} from 'app/actions/posts'

class PostScreen extends React.Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired,
    fetchPost: React.PropTypes.func.isRequired,
    post: React.PropTypes.object,
    postError: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool])
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
    const {post, postError} = this.props

    if (postError) return <PostError message={postError}/>
    if (!post || !post.bodyHTML) return <Loading/>
    return <Post post={post}/>
  }
}

function mapStateToProps (state, ownProps) {
  return {
    post: getPost(state, ownProps.params.slug),
    postError: getPostError(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPost: (fileName) => dispatch(fetchPost(fileName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen)
