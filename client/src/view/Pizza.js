import React from 'react'
import '../style/Pizza.css'
import { Link } from 'react-router-dom'
import CrispyChickenPizza9Incher from '../images/Pizza/Crispy-Chicken-Pizza-9-Incher.jpg'
import CrispyChickenPizza10Incher from '../images/Pizza/Crispy-Chicken-Pizza-10-Incher.jpg'
import fullv1 from '../images/Pizza/full-v1.jpg'
import halfandhalfv1 from '../images/Pizza/half-and-half-v1.jpg'
import original10incherv1 from '../images/Pizza/original-10incher-v1.jpg'
import original15incherv1 from '../images/Pizza/original-15incher-v1.jpg'
import pan9incherdesktop from '../images/Pizza/pan-9incher-desktop.jpg'
import pan12incherdesktop from '../images/Pizza/pan-12incher-desktop.jpg'
import slicedesktop from '../images/Pizza/slice-desktop.jpg'
import thinza10incherv1 from '../images/Pizza/thinza-10incher-v1.jpg'
import xtreme9incherv1 from '../images/Pizza/xtreme-9incher-v1.jpg'
import xtreme12incherv1 from '../images/Pizza/xtreme-12incher-v1.jpg'

function Pizza() {
  return (
    <div>
        <section>
        <div className='pizza-heading'>
          <h1>Pizza</h1>
        </div>
          <div className="pizza-main">
            <div className="card">
              <Link to="/pizza">
                <img src={CrispyChickenPizza9Incher} alt="" />
              </Link>
              <div className="label">
                <h1 className='pizza'>Crispy 9 Incher - Serves 2-3 Rs. 999</h1>
              </div>
            </div>
            <div className="card">
              <Link to="/side-lines">
                <img src={CrispyChickenPizza10Incher} alt="" />
              </Link>
              <div className="label">
                <h1 className='sidelines'>Sidelines</h1>
              </div>
            </div>
            <div className="card">
              <Link to="/desserts">
                <img src={fullv1} alt="" />
              </Link>
              <div className="label">
                <h1 className='desserts'>Desserts</h1>
              </div>
            </div>
            <div className="card">
              <Link to="/deals">
                <img src={halfandhalfv1} alt="" />
              </Link>
              <div className="label">
                <h1 className='deals'>Deals</h1>
              </div>
            </div>
            <div className="card">
              <Link to="/drinks">
                <img src={original10incherv1} alt="" />
              </Link>
              <div className="label">
                <h1 className='drinks'>Drinks</h1>
              </div>
            </div>
            <div className="card">
              <Link to="/dips">
                <img src={original15incherv1} alt="" />
              </Link>
              <div className="label">
                <h1 className='dips'>Dips</h1>
              </div>
            </div>
            <div className="card">
              <Link to="/dips">
                <img src={pan9incherdesktop} alt="" />
              </Link>
              <div className="label">
                <h1 className='dips'>Dips</h1>
              </div>
            </div>
            <div className="card">
              <Link to="/dips">
                <img src={pan12incherdesktop} alt="" />
              </Link>
              <div className="label">
                <h1 className='dips'>Dips</h1>
              </div>
            </div>
            <div className="card">
              <Link to="/dips">
                <img src={slicedesktop} alt="" />
              </Link>
              <div className="label">
                <h1 className='dips'>Dips</h1>
              </div>
            </div>
            <div className="card">
              <Link to="/dips">
                <img src={thinza10incherv1} alt="" />
              </Link>
              <div className="label">
                <h1 className='dips'>Dips</h1>
              </div>
            </div>
            <div className="card">
              <Link to="/dips">
                <img src={xtreme9incherv1} alt="" />
              </Link>
              <div className="label">
                <h1 className='dips'>Dips</h1>
              </div>
            </div>
            <div className="card">
              <Link to="/dips">
                <img src={xtreme12incherv1} alt="" />
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

export default Pizza
