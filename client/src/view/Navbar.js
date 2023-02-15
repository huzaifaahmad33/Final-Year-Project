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
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Services</a></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
