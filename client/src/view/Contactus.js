import React, {useState} from 'react'
import '../style/Contactus.css'
import contactusbanner from '../images/Banners/contactusbanner.jpg'
import axios from 'axios'

function Contactus() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');

  const saveContactUs = async (e) => {
    e.preventDefault();

    const contatcUs = {
      contactus_name: name,
      contactus_email: email,
      contactus_phone: phone,
      contactus_city: city,
      contactus_message: message
    }

    const res = await axios.post('http://127.0.0.1:8000/api/contact-us', contatcUs);

    if(res.data.status === 200){
      console.log(res.data.message);
      setName('');
      setEmail('');
      setCity('');
      setMessage('');
      alert('Submitted Successfully');
    }
  }

  return (
    <div>
      <div className='contactusbanner'>
        <img src={contactusbanner} alt="contactusbanner" />
      </div>
      <div className='contactusform'>
        <form onSubmit={saveContactUs}>
        <input type='text' placeholder='Full Name' name='contactus_name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type='email' placeholder='Email' name='contactus_email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='tel' placeholder='Contact No.' name='contactus_phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input type='text' placeholder='City' name='contactus_city' value={city} onChange={(e) => setCity(e.target.value)} />
        <textarea name="contactus_message" id="" cols="30" rows="10" form='formspeakyourmind' placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
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
