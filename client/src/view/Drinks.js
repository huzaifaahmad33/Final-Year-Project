import React from 'react'
import '../style/Drinks.css'
import drinksbanner from '../images/Banners/drinksbanner.jpg'
import drinksheading from '../images/Banners/drinks-heading.png'

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
    </div>
  )
}

export default Drinks
