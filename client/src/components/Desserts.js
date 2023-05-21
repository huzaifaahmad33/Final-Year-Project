import React from 'react'
import '../style/Desserts.css'
import sweetsomethingsbanner from '../images/Banners/sweetsomethingsbanner.jpg'
import sweetsomethingsheading from '../images/Banners/sweet-somethings-heading.png'
import { Link } from 'react-router-dom'
import list from '../datadesserts'
import Cards from './Card'


const Desserts = ({ handleClick }) => {
  return (
    <div>
      <div className='dessertsbanner'>
        <img src={sweetsomethingsbanner} alt="dessertsbanner" />
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
      <div className="dessertscenterimage">
        <img src={sweetsomethingsheading} alt="dessertscenterimage" />
      </div>
      <div className="dessertstatement">
        <p>14th Street Pizza loves a sweet ending. Go for one of our delightfully rich desserts and give your sweet tooth utmost <br /> satisfaction.</p>
      </div>
      <section className='desserts-section'>
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

export default Desserts
