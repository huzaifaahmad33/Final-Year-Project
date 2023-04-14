import React from 'react'
import '../style/Dips.css'
import dipsbanner from '../images/Banners/dipsbanner.jpg'
import extradips from '../images/Banners/extra-dips.png'
import garlic from '../images/Dips/garlic-and-herb-dip.png'
import butter from '../images/Dips/garlic-butter.jpg'
import honey from '../images/Dips/honey-mustard.jpg'
import ranch from '../images/Dips/ranch.jpg'
import sour from '../images/Dips/sour-cream.jpg'
import southwest from '../images/Dips/southwest.jpg'
import { AiOutlineArrowRight } from "react-icons/ai";
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
      <div className='dips-main'>
          <div className='dips-card'>
              <img src={garlic} alt='' />
          </div>
          <div className='dips-card'>
              <img src={butter} alt='' />
          </div>
          <div className='dips-card'>
              <img src={honey} alt='' />
          </div>
          <div className='dips-card'>
              <img src={ranch} alt='' />
          </div>
          <div className='dips-card'>
              <img src={sour} alt='' />
          </div>
          <div className='dips-card'>
              <img src={southwest} alt='' />
          </div>
        </div>
        <button className='dips-addToCartButton'>
          Add to Cart
          <AiOutlineArrowRight></AiOutlineArrowRight>
          </button>
          <AiOutlineArrowRight className='arrow'></AiOutlineArrowRight>
        <div className='aboutuspizza'>
      -------------------------------------
        <ion-icon name='pizza-outline'></ion-icon>
        -------------------------------------
      </div>
    </div>
  )
}

export default Dips
