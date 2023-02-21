import React from 'react'
import '../style/Menu.css'
import pizza from '../images/Menu/pizza.jpg'
import dips from '../images/Menu/dips.jpg'
import desserts from '../images/Menu/desserts.jpg'
import drinks from '../images/Menu/drinks.jpg'
import sidelines from '../images/Menu/sidelines.jpg'
import deals from '../images/Menu/deals.jpg'
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
                <h1>Pizza</h1>
              </div>
            </div>
            <div className="card">
              <Link to="/side-lines">
                <img src={sidelines} alt="" />
              </Link>
              <div className="label">
                <h1>Sidelines</h1>
              </div>
            </div>
            <div className="card">
              <Link to="/desserts">
                <img src={desserts} alt="" />
              </Link>
              <div className="label">
                <h1>Desserts</h1>
              </div>
            </div>
            <div className="card">
              <Link to="/deals">
                <img src={deals} alt="" />
              </Link>
              <div className="label">
                <h1>Deals</h1>
              </div>
            </div>
            <div className="card">
              <Link to="/drinks">
                <img src={drinks} alt="" />
              </Link>
              <div className="label">
                <h1>Drinks</h1>
              </div>
            </div>
            <div className="card">
              <Link to="/dips">
                <img src={dips} alt="" />
              </Link>
              <div className="label">
                <h1>Dips</h1>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}

export default Menu