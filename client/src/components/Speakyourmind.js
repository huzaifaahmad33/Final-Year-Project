import React, { useState } from 'react';
import '../style/Speakyourmind.css';
import speakyourmindbanner from '../images/Banners/speakyourmindbanner.jpg';
import axios from 'axios'

function Speakyourmind() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');

  const saveSpeakyourmind = async (e) => {
    e.preventDefault();

    const speakYourMind = {
      sym_name: name,
      sym_email: email,
      sym_city: city,
      sym_message: message
    }

    const res = await axios.post('http://127.0.0.1:8000/api/speak-your-mind', speakYourMind);

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
      <div className='speakyourmindbanner'>
        <img src={speakyourmindbanner} alt="speakyourmindbanner" />
      </div>
      <div className="speakyourmindform">
        <form onSubmit={saveSpeakyourmind} id='formspeakyourmind'>
          <input type='text' placeholder='Name' name='sym_name' value={name} onChange={(e) => setName(e.target.value)} />
          <input type='email' placeholder='Email' name='sym_email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type='text' placeholder='City' name='sym_city' value={city} onChange={(e) => setCity(e.target.value)} />
          <textarea name="sym_message" id="" cols="30" rows="10" form='formspeakyourmind' placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          <button type='submit'>SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default Speakyourmind;