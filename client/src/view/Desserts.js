import React from 'react'
import '../style/Desserts.css'
import sweetsomethingsbanner from '../images/Banners/sweetsomethingsbanner.jpg'
import sweetsomethingsheading from '../images/Banners/sweet-somethings-heading.png'
import cake from '../images/Desserts/chocolate-cake.jpg'
import minilava from '../images/Desserts/mini-lava-cake.jpg'
import nutella from '../images/Desserts/mini-nutella.jpg'
import brownie from '../images/Desserts/nutella-brownie.jpg'
import { AiOutlineArrowRight } from "react-icons/ai";


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
      <div className='desserts-main'>
          <div className='desserts-card'>
              <img src={cake} alt='' />
          </div>
          <div className='desserts-card'>
              <img src={minilava} alt='' />
          </div>
          <div className='desserts-card'>
              <img src={nutella} alt='' />
          </div>
          <div className='desserts-card'>
              <img src={brownie} alt='' />
          </div>
        </div>
        <button className='desserts-addToCartButton'>
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

export default Desserts
