import React from 'react'
import '../style/Pizza.css'
import { Link } from 'react-router-dom'
import Cards from './Card'
import list from '../datapizza'

const Pizza = ({ handleClick }) => {
  return (
    <div>
      <section>
      <div className="navlinks-pizza">
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
        <div className='pizza-heading'>
          <h1>Pizza</h1>
        </div>
        <section className='pizza-section'>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
        <div className='aboutuspizza'>
      -------------------------------------
        <ion-icon name='pizza-outline'></ion-icon>
        -------------------------------------
      </div>
      </section>
    </div>
  );
}

export default Pizza;
