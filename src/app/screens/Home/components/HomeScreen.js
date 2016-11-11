import React from 'react'
import {connect} from 'react-redux'
import Home from './Home'
import {getPosts} from 'app/reducers/posts'
import {fetchPosts} from 'app/actions/posts'

class HomeScreen extends React.Component {
  static propTypes = {
    fetchPosts: React.PropTypes.func.isRequired,
    posts: React.PropTypes.array
  }

  componentDidMount () {
    this.props.fetchPosts()
  }

  render () {
    return <Home posts={this.props.posts}/>
  }
}

function mapStateToProps (state, ownProps) {
  return {
    posts: getPosts(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
