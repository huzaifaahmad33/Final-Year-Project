import React from 'react'
import logo from '../images/logo.png'
import '../style/Navbar.css'

function Navbar() {
  return (
    <div>
      <div className="discount">
        Hey visitor, We've got a 15% discount for you! Now thats Awesome! 
      </div>
      <header>
        <a href='/'>
          <img src={logo} alt='logo'></img>
        </a>
        <nav>
          <ul>
            <li><a href="/">Menu</a></li>
            <li><a href="/">Deals</a></li>
            <li><a href="/">Order Online</a></li>
            <li><a href="/">Contact us</a></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
