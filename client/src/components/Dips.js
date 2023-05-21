import React from 'react'
import '../style/Dips.css'
import dipsbanner from '../images/Banners/dipsbanner.jpg'
import extradips from '../images/Banners/extra-dips.png'
import { Link } from 'react-router-dom'
import Cards from './Card'
import list from '../datadips'

const Dips = ({ handleClick }) => {
  return (
    <div>
      <div className='dipsbanner'>
        <img src={dipsbanner} alt="dipsbanner" />
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
      <div className="dipscenterimage">
        <img src={extradips} alt="dipscenterimage" />
      </div>
      <div className="dipstatement">
        <p>From creamy to sweet to spicy, dip it your way with our range of original homemade sauces.</p>
      </div>
      <section className='dips-section'>
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

export default Dips
