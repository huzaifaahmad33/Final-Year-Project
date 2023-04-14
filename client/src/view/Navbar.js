import React from 'react'
import logo from '../images/logo.png'
import '../style/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className="discount">
        Hey visitors, We've got a 15% discount for you! Now thats Awesome! 
      </div>
      <header>
        <Link to='/'>
          <img src={logo} alt='logo'></img>
        </Link>
        <nav>
          <ul>
            <li><Link to="/">Menu</Link></li>
            <li><Link to="/deals">Deals</Link></li>
            <li><Link to="/order-online">Order Online</Link></li>
            <li><Link to="/contact-us">Contact us</Link></li>
          </ul>
        </nav>
        <button className='nav-cart'><Link to="/cart"><i><ion-icon name="cart"></ion-icon></i></Link></button>
      </header>
    </div>
  )
}

export default Navbar
