import React from 'react'
import '../style/Menu.css'
import pizza from '../images/Menu/pizza.jpg'
import dips from '../images/Menu/dips.jpg'
import desserts from '../images/Menu/desserts.jpg'
import drinks from '../images/Menu/drinks.jpg'
import sidelines from '../images/Menu/sidelines.jpg'
import deals from '../images/Menu/deals.jpg'
import homebanner from '../images/slider/homebanner.png'
import homebannersupersundaypsldeal from '../images/slider/homebannersupersundaypsldeal.jpg'
import midnightbanner from '../images/slider/midnightbanner.jpg'
import pancrustbanner from '../images/slider/pancrustbanner.jpg'
import stuffedcrustbanner from '../images/slider/stuffedcrustbanner.jpg'
import summerdealbanner from '../images/slider/summerdealbanner.jpg'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div>
      <section>
        <div className='menu-heading'>
          <h1>Menu</h1>
        </div>
          <div className="menu-main">
            <div className="card">
              <Link to="/pizza">
                <img src={pizza} alt="" />
              </Link>
              <div className="label">
                <h1 className='pizza'>Pizza</h1>
              </div>
            </div>
            <div className="card">
              <Link to="/side-lines">
                <img src={sidelines} alt="" />
              </Link>
              <div className="label">
                <h1 className='sidelines'>Sidelines</h1>
              </div>
            </div>
            <div className="card">
              <Link to="/desserts">
                <img src={desserts} alt="" />
              </Link>
              <div className="label">
                <h1 className='desserts'>Desserts</h1>
              </div>
            </div>
            <div className="card">
              <Link to="/deals">
                <img src={deals} alt="" />
              </Link>
              <div className="label">
                <h1 className='deals'>Deals</h1>
              </div>
            </div>
            <div className="card">
              <Link to="/drinks">
                <img src={drinks} alt="" />
              </Link>
              <div className="label">
                <h1 className='drinks'>Drinks</h1>
              </div>
            </div>
            <div className="card">
              <Link to="/dips">
                <img src={dips} alt="" />
              </Link>
              <div className="label">
                <h1 className='dips'>Dips</h1>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}

export default Menu