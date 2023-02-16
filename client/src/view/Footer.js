import React from 'react'
import logo from '../images/logo.png'
import '../style/Footer.css'

function Footer() {
  return (
    <div>
        <main>
            Content
        </main>
      <footer className='footer'>
        <div className="footer-left">
            <img src={logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum necessitatibus explicabo illo quisquam eius optio?</p>
            <div className="socials">
                <a href="/"><i><ion-icon name="logo-facebook"></ion-icon></i></a>
                <a href="/"><i><ion-icon name="logo-twitter"></ion-icon></i></a>
                <a href="/"><i><ion-icon name="logo-github"></ion-icon></i></a>
                <a href="/"><i><ion-icon name="logo-instagram"></ion-icon></i></a>
            </div>
        </div>
        <ul className="footer-right">
            <li>
                <h2>Product</h2>
                <ul className="box">
                    <li><a href="/">Theme Design</a></li>
                    <li><a href="/">Wordpress</a></li>
                    <li><a href="/">Plugin Design</a></li>
                    <li><a href="/">HTML Template</a></li>
                </ul>
            </li>
            <li className='features'>
                <h2>Useful Links</h2>
                <ul className="box">
                    <li><a href="/">Theme Design</a></li>
                    <li><a href="/">Wordpress</a></li>
                    <li><a href="/">Plugin Design</a></li>
                    <li><a href="/">HTML Template</a></li>
                    <li><a href="/">Certifications</a></li>
                </ul>
            </li>
            <li className='box'>
                <h2>Useful Links</h2>
                <ul className="box">
                    <li><a href="/">Theme Design</a></li>
                    <li><a href="/">Wordpress</a></li>
                    <li><a href="/">Plugin Design</a></li>
                    <li><a href="/">HTML Template</a></li>
                    <li><a href="/">Certifications</a></li>
                    <li><a href="/">Pakistan</a></li>
                </ul>
            </li>
        </ul>
        <div className="footer-bottom">
            <p>All Rights reserved by &copy;Blueco 2023</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
