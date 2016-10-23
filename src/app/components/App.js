import React from 'react'

import Header from './Header'

import posts from 'app/utils/posts'

class App extends React.Component {
  state = {
    posts
  }

  static propTypes = {
    children: React.PropTypes.element
  }

  render () {
    return (
      <div>
        <Header></Header>
        {this.props.children ? React.cloneElement(this.props.children, {...this.state}) : null}
      </div>
    )
  }
}

export default App
