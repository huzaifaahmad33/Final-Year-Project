import React from 'react'
import logo from '../images/logofooter.png'
import payment from '../images/payment/mastercard.png'
import '../style/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <footer className='footer'>
        <div className="footer-left">
            <img src={logo} alt="" />
            <p>Thank you for ordering<br />Powered by Blueco.</p><br />
            <img src={payment} className='footer-payment' alt="" />
        </div>
        <ul className="footer-right">
            <li>
                <h2>Information</h2>
                <ul className="box">
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/speak-your-mind">Speak your mind</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>
            </li>
            <li className='features'>
                <h2>Contact Us</h2>
                <ul className="box">
                    <li><Link>0305-2094956</Link></li>
                    <li><Link>0306-9353680</Link></li>
                    <li><Link>ahuzaifa64@gmail.com</Link></li>
                    <li><Link>haseeb@gmail.com</Link></li>
                </ul>
            </li>
            <div className="socials">
                <h4>Follow Us</h4>
                <a href="https://www.facebook.com/" target='_blank' rel='noreferrer'><i><ion-icon name="logo-facebook"></ion-icon></i></a>
                <a href="https://twitter.com/" target='_blank' rel='noreferrer'><i><ion-icon name="logo-twitter"></ion-icon></i></a>
                <a href="https://github.com/" target='_blank' rel='noreferrer'><i><ion-icon name="logo-github"></ion-icon></i></a>
                <a href="https://www.instagram.com/" target='_blank' rel='noreferrer'><i><ion-icon name="logo-instagram"></ion-icon></i></a>
            </div>
        </ul>
        <div className="footer-bottom">
            <p>All Rights reserved by &copy;Blueco. 2023</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
