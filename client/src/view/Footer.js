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
            <p>Thank You for Ordering from Blueco.</p>
        </div>
        <ul className="footer-right">
            <li>
                <h2>Information</h2>
                <ul className="box">
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Speak your mind</a></li>
                    <li><a href="/">Careers</a></li>
                    <li><a href="/">Contact Us</a></li>
                </ul>
            </li>
            <li className='features'>
                <h2>Contact Us</h2>
                <ul className="box">
                    <li><a href="/">0305-2094956</a></li>
                    <li><a href="/">0306-9353   680</a></li>
                    <li><a href="/">ahuzaifa64@gmail.com</a></li>
                    <li><a href="/">haseeb@gmail.com</a></li>
                </ul>
            </li>
            <div className="socials">
                <h4>Follow Us</h4>
                <a href="/"><i><ion-icon name="logo-facebook"></ion-icon></i></a>
                <a href="/"><i><ion-icon name="logo-twitter"></ion-icon></i></a>
                <a href="/"><i><ion-icon name="logo-github"></ion-icon></i></a>
                <a href="/"><i><ion-icon name="logo-instagram"></ion-icon></i></a>
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
