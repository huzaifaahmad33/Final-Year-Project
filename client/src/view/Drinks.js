import React from 'react'
import '../style/Drinks.css'
import drinksbanner from '../images/Banners/drinksbanner.jpg'
import drinksheading from '../images/Banners/drinks-heading.png'
import coke from '../images/Drinks/coke.jpg'
import cokezero from '../images/Drinks/cokezero.jpg'
import dasaniwater from '../images/Drinks/dasaniwater.jpg'
import dietcoke from '../images/Drinks/dietcoke.jpg'
import fanta from '../images/Drinks/fanta.jpg'
import minutemaid from '../images/Drinks/minutemaid.jpg'
import sprite from '../images/Drinks/sprite.jpg'
import spritezero from '../images/Drinks/spritezero.jpg'
import { AiOutlineArrowRight } from "react-icons/ai";



function Drinks() {
  return (
    <div>
      <div className='drinksbanner'>
        <img src={drinksbanner} alt="drinksbanner" />
      </div>
      <div className="drinkscenterimage">
        <img src={drinksheading} alt="drinkscenterimage" />
      </div>
      <div className="drinkstatement">
        <p>Your meal isn't complete without your favorite drink. Here's a selection of your favorites - perfect for one, or many if <br /> you're up for sharing.</p>
      </div>
      <div className='drinks-main'>
          <div className='drinks-card'>
              <img src={coke} alt='' />
          </div>
          <div className='drinks-card'>
              <img src={cokezero} alt='' />
          </div>
          <div className='drinks-card'>
              <img src={dasaniwater} alt='' />
          </div>
          <div className='drinks-card'>
              <img src={dietcoke} alt='' />
          </div>
          <div className='drinks-card'>
              <img src={fanta} alt='' />
          </div>
          <div className='drinks-card'>
              <img src={minutemaid} alt='' />
          </div>
          <div className='drinks-card'>
              <img src={sprite} alt='' />
          </div>
          <div className='drinks-card'>
              <img src={spritezero} alt='' />
          </div>
        </div>
        <button className='drinks-addToCartButton'>
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

export default Drinks
