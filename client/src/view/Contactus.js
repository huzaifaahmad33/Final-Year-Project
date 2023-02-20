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
        <input type='text' placeholder='Contact No.' />
        <input type='text' placeholder='City' />
        <textarea name="" id="" cols="30" rows="10" form='formspeakyourmind' placeholder='Message'></textarea>
        <button>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contactus
