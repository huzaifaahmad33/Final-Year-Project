import React from 'react'
import '../style/Sidelines.css'
import sidelinesbanner from '../images/Banners/sidelinesbanner.jpg'
import sidelinesheading from '../images/Banners/sidelines-heading.png'
import { Link } from 'react-router-dom'
import list from '../datasidelines'
import Cards from './Card'


const Sidelines = ({ handleClick }) => {
  return (
    <div>
      <div className='sidelinesbanner'>
        <img src={sidelinesbanner} alt="sidelinesbanner" />
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
      <div className="sidelinescenterimage">
        <img src={sidelinesheading} alt="sidelinescenterimage" />
      </div>
      <div className="sidelinestatement">
        <p>In the mood for an extra something? Our sides are way too good to sideline. Don't take our word for it though, let <br /> your taste buds decide for themselves.</p>
      </div>
      <section className='sidelines-section'>
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

export default Sidelines
