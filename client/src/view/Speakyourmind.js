import React from 'react';
import '../style/Speakyourmind.css';
import speakyourmindbanner from '../images/Banners/speakyourmindbanner.jpg';

function Speakyourmind() {
  return (
    <div>
      <div className='speakyourmindbanner'>
        <img src={speakyourmindbanner} alt="speakyourmindbanner" />
      </div>
      <div className="speakyourmindform">
        <form action="" id='formspeakyourmind'>
          <input type='text' placeholder='Name' />
          <input type='email' placeholder='Email' />
          <input type='text' placeholder='City' />
          <textarea name="" id="" cols="30" rows="10" form='formspeakyourmind' placeholder='Message'></textarea>
          <button>SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default Speakyourmind;
