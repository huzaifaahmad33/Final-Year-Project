import React from 'react'
import '../style/Dips.css'
import dipsbanner from '../images/Banners/dipsbanner.jpg'
import extradips from '../images/Banners/extra-dips.png'
import garlic from '../images/Dips/garlic-and-herb-dip.png'
import butter from '../images/Dips/garlic-butter.jpg'
import honey from '../images/Dips/honey-mustard.jpg'
import ranch from '../images/Dips/ranch.jpg'
import sour from '../images/Dips/sour-cream.jpg'
import southwest from '../images/Dips/southwest.jpg'
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom'

function Dips() {
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
    <div class="main">
    <div class="card">
      <img src={garlic} alt="/"/>
        <div class="card-details">
          <div class="options">
            <label>
              <input type="checkbox" name="option1"/> Garlic & Herb
            </label>
            <select name="select1">
            <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <h2>79 Rs</h2>
          </div>
        </div>
      </div>
      <div class="card">
        <img src={butter} alt="/"/>
          <div class="card-details">
            <div class="options">
              <label>
                <input type="checkbox" name="option1"/> Garlic Butter
              </label>
              <select name="select1">
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
              <h2>79 Rs</h2>
            </div>
          </div>
        </div>
        <div class="card">
          <img src={honey} alt="/"/>
            <div class="card-details">
              <div class="options">
                <label>
                  <input type="checkbox" name="option1"/> Honey Mustard
                </label>
                <select name="select1">
                <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
                <h2>79 Rs</h2>
              </div>
            </div>
          </div>
          <div class="card">
            <img src={ranch} alt="/"/>
              <div class="card-details">
                <div class="options">
                  <label>
                    <input type="checkbox" name="option1"/> Sour Cream
                  </label>
                  <select name="select1">
                  <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
                  <h2>79 Rs</h2>
                </div>
              </div>
            </div>
            <div class="card">
              <img src={sour} alt="/"/>
                <div class="card-details">
                  <div class="options">
                    <label>
                      <input type="checkbox" name="option1"/> Ranch
                    </label>
                    <select name="select1">
                    <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
                    <h2>79 Rs</h2>
                  </div>
                </div>
              </div>
              <div class="card">
                <img src={southwest} alt="/"/>
                  <div class="card-details">
                    <div class="options">
                      <label>
                        <input type="checkbox" name="option1"/> Southwest
                      </label>
                      <select name="select1">
                      <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
                      <h2>79 Rs</h2>
                    </div>
                  </div>
                </div>
              </div>
        <button className='dips-addToCartButton'>
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

export default Dips
