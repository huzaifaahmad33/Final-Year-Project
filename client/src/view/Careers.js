import React, {useState} from 'react'
import '../style/Careers.css'
import careersbanner from '../images/Banners/careersbanner.jpg'
import axios from 'axios'

function Careers() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [department, setDepartment] = useState('');
  const [cv, setCv] = useState('');

  const saveCareersData = async (e) => {
    e.preventDefault();

    const careers = {
      careers_name: name, 
      careers_email: email, 
      careers_city: city, 
      careers_department: department, 
      careers_cv: cv
    }

    const res = await axios.post('http://127.0.0.1:8000/api/careers', careers);

    if(res.data.status === 200){
      console.log(res.data.message);
      setName('');
      setEmail('');
      setCity('');
      setDepartment('');
      setCv('');
      alert('Submitted Successfully');
    }
  }

  return (
    <div>
      <div className='careersbanner'>
        <img src={careersbanner} alt="careersbanner" />
      </div>
      <div className="wearenowhiringheading">
        <h1>WE're Now Hiring</h1>
      </div>
      <div className='careersform'>
        <form onSubmit={saveCareersData}>
        <input type='text' placeholder='Full Name' name='careers_name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type='email' placeholder='Email' name='careers_email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='text' placeholder='City' name='careers_city' value={city} onChange={(e) => setCity(e.target.value)} />
        <input type='text' placeholder='Department' name='careers_department' value={department} onChange={(e) => setDepartment(e.target.value)} />
        <input type='file' placeholder='Attach CV' name='careers_cv' value={cv} onChange={(e) => setCv(e.target.value)} />
        <button>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default Careers
