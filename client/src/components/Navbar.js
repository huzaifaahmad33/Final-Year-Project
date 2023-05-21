import React from 'react'
import logo from '../images/logo.png'
import '../style/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({ setShow, size }) => {
  return (
    <div>
      <div className="discount">
        Hey visitors, We've got a 15% discount for you! Now thats Awesome! 
      </div>
    <div class="main">
      <nav>
         <div class="logo">
            <Link to="/" onClick={() => setShow(true)}><img src={logo} alt=""/></Link>
         </div>
         <input type="checkbox" id="click"/>
         <label for="click" class="menu-btn">
         <i><ion-icon name="menu"></ion-icon></i>
         </label>
         <ul>
            <li><Link to="/">Menu</Link></li>
            <li><Link to="/deals">Deals</Link></li>
            <li><Link to="/side-lines">Order Online</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
         </ul>
         <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </nav>
    </div>
    <div className='red-border'></div>
    </div>
  )
}

export default Navbar
