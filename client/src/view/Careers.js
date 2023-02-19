import React from 'react'
import '../style/Careers.css'
import careersbanner from '../images/Banners/careersbanner.jpg'

function Careers() {
  return (
    <div>
      <div className='careersbanner'>
        <img src={careersbanner} alt="careersbanner" />
      </div>
      <div className="wearenowhiringheading">
        <h1>WE're Now Hiring</h1>
      </div>
      <div className='careersform'>
        <form action="">
        <input type='text' placeholder='Full Name' />
        <input type='email' placeholder='Email' />
        <input type='text' placeholder='City' />
        <input type='text' placeholder='Department' />
        <input type='file' placeholder='Attach CV' />
        <button>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default Careers
