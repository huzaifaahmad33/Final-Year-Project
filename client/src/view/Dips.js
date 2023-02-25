import React from 'react'
import '../style/Dips.css'
import dipsbanner from '../images/Banners/dipsbanner.jpg'
import extradips from '../images/Banners/extra-dips.png'

function Dips() {
  return (
    <div>
      <div className='dipsbanner'>
        <img src={dipsbanner} alt="dipsbanner" />
      </div>
      <div className="dipscenterimage">
        <img src={extradips} alt="dipscenterimage" />
      </div>
      <div className="dipstatement">
        <p>From creamy to sweet to spicy, dip it your way with our range of original homemade sauces.</p>
      </div>
    </div>
  )
}

export default Dips
