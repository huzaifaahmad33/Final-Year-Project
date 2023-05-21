import React from 'react'
import '../style/Drinks.css'
import drinksbanner from '../images/Banners/drinksbanner.jpg'
import drinksheading from '../images/Banners/drinks-heading.png'
import { Link } from 'react-router-dom'
import list from '../datadrinks'
import Cards from './Card'



const Drinks = ({ handleClick }) => {
  return (
    <div>
      <div className='drinksbanner'>
        <img src={drinksbanner} alt="drinksbanner" />
      </div>
      <div className="navlinks">
        <ul>
          <li><Link to='/pizza'>Pizza</Link></li>
          <li><Link to='/side-lines'>Sidelines</Link></li>
          <li><Link to='/desserts'>Desserts</Link></li>
          <li><Link to='/deals'>Deals</Link></li>
          <li><Link to='/drinks'>Drinks</Link></li>
          <li><Link to='/dips'>Dips</Link></li>
        </ul>
        <hr />
      </div>
      <div className="drinkscenterimage">
        <img src={drinksheading} alt="drinkscenterimage" />
      </div>
      <div className="drinkstatement">
        <p>Your meal isn't complete without your favorite drink. Here's a selection of your favorites - perfect for one, or many if <br /> you're up for sharing.</p>
      </div>
      <section className='drinks-section'>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
        <div className='aboutuspizza'>
      -------------------------------------
        <ion-icon name='pizza-outline'></ion-icon>
        -------------------------------------
      </div>
    </div>
  )
}

export default Drinks
