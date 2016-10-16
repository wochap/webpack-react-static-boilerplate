import React from 'react'
import {Link} from 'react-router'

function Header () {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
