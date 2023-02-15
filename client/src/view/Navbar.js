import React from 'react'
import logo from '../images/logo.png'
import '../style/Navbar.css'

function Navbar() {
  return (
    <div>
      <header>
        <a href='/'>
          <img src={logo} alt='logo'></img>
        </a>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
