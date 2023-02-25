import React from 'react'
import '../style/Desserts.css'
import sweetsomethingsbanner from '../images/Banners/sweetsomethingsbanner.jpg'
import sweetsomethingsheading from '../images/Banners/sweet-somethings-heading.png'

function Desserts() {
  return (
    <div>
      <div className='dessertsbanner'>
        <img src={sweetsomethingsbanner} alt="dessertsbanner" />
      </div>
      <div className="dessertscenterimage">
        <img src={sweetsomethingsheading} alt="dessertscenterimage" />
      </div>
      <div className="dessertstatement">
        <p>14th Street Pizza loves a sweet ending. Go for one of our delightfully rich desserts and give your sweet tooth utmost <br /> satisfaction.</p>
      </div>
    </div>
  )
}

export default Desserts
