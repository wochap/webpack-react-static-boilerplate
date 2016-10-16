import React, {PropTypes, Component} from 'react'

import Header from './Header'

import posts from 'app/utils/posts'

class App extends Component {
  state = {
    posts
  }

  static propTypes = {
    children: PropTypes.element.isRequired
  }

  render () {
    return (
      <div>
        <Header></Header>
        {React.cloneElement(this.props.children, {...this.state})}
      </div>
    )
  }
}

export default App
