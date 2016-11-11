import React from 'react'
import Header from './Header'

function RootScreen (props) {
  return (
    <div>
      <Header></Header>
      {props.children}
    </div>
  )
}

RootScreen.propTypes = {
  children: React.PropTypes.element
}

export default RootScreen
