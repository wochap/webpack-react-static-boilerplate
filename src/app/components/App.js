import React, {Component} from 'react'

import Header from './Header'

class App extends Component {
  static propTypes = {
    children: React.PropTypes.element
  }

  render () {
    return (
      <div>
        <h1>App</h1>
        <Header></Header>
        {this.props.children}
      </div>
    )
  }
}

export default App
