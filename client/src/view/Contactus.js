import React from 'react'
import '../style/Contactus.css'
import contactusbanner from '../images/Banners/contactusbanner.jpg'

function Contactus() {
  return (
    <div>
      <div className='contactusbanner'>
        <img src={contactusbanner} alt="contactusbanner" />
      </div>
      <div className='contactusform'>
        <form action="">
        <input type='text' placeholder='Full Name' />
        <input type='email' placeholder='Email' />
        <input type='tel' placeholder='Contact No.' />
        <input type='text' placeholder='City' />
        <textarea name="" id="" cols="30" rows="10" form='formspeakyourmind' placeholder='Message'></textarea>
        <button>Send Message</button>
        </form>
        <div className='contactuslinks'>
          <h3 id='getintoch'>Get in touch</h3>
          <br />
          <a href='info@blueco.io'>
            <ion-icon name='call-outline'></ion-icon> &nbsp;021-111-36-36-36
            <br />
          </a>
          <a href='info@blueco.io'>
            <ion-icon name='at-outline'></ion-icon>&nbsp; info@blueco.io <br />
          </a>
          <a href='https://www.facebook.com/blueco'>
            <ion-icon name='logo-facebook'></ion-icon>&nbsp;
            www.facebook.com/blueco <br />
          </a>
          <a href='https://www.twitter.com/blueco'>
            <ion-icon name='logo-twitter'></ion-icon>&nbsp;
            www.twitter.com/blueco <br />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contactus
