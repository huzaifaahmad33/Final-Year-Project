import React from 'react'
import '../style/Drinks.css'
import drinksbanner from '../images/Banners/drinksbanner.jpg'
import drinksheading from '../images/Banners/drinks-heading.png'
import coke from '../images/Drinks/coke.jpg'
import cokezero from '../images/Drinks/cokezero.jpg'
import dasaniwater from '../images/Drinks/dasaniwater.jpg'
import dietcoke from '../images/Drinks/dietcoke.jpg'
import fanta from '../images/Drinks/fanta.jpg'
import minutemaid from '../images/Drinks/minutemaid.jpg'
import sprite from '../images/Drinks/sprite.jpg'
import spritezero from '../images/Drinks/spritezero.jpg'
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom'



function Drinks() {
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
      <div class="main">
    <div class="card">
      <img src={coke} alt="/"/>
        <div class="card-details">
          <div class="options">
            <label>
              <input type="checkbox" name="option1"/> Option 1
            </label>
            <select name="select1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div class="options">
            <label>
              <input type="checkbox" name="option2"/> Option 2
            </label>
            <select name="select2">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>
      </div>
      <div class="card">
        <img src={cokezero} alt="/"/>
          <div class="card-details">
            <div class="options">
              <label>
                <input type="checkbox" name="option1"/> Option 1
              </label>
              <select name="select1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div class="options">
              <label>
                <input type="checkbox" name="option2"/> Option 2
              </label>
              <select name="select2">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
        </div>
        <div class="card">
          <img src={dietcoke} alt="/"/>
            <div class="card-details">
              <div class="options">
                <label>
                  <input type="checkbox" name="option1"/> Option 1
                </label>
                <select name="select1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div class="options">
                <label>
                  <input type="checkbox" name="option2"/> Option 2
                </label>
                <select name="select2">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div>
          </div>
          <div class="card">
            <img src={dasaniwater} alt="/"/>
              <div class="card-details">
                <div class="options">
                  <label>
                    <input type="checkbox" name="option1"/> Option 1
                  </label>
                  <select name="select1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <div class="options">
                  <label>
                    <input type="checkbox" name="option2"/> Option 2
                  </label>
                  <select name="select2">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="card">
              <img src={fanta} alt="/"/>
                <div class="card-details">
                  <div class="options">
                    <label>
                      <input type="checkbox" name="option1"/> Option 1
                    </label>
                    <select name="select1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                  <div class="options">
                    <label>
                      <input type="checkbox" name="option2"/> Option 2
                    </label>
                    <select name="select2">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="card">
                <img src={minutemaid} alt="/"/>
                  <div class="card-details">
                    <div class="options">
                      <label>
                        <input type="checkbox" name="option1"/> Option 1
                      </label>
                      <select name="select1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                    <div class="options">
                      <label>
                        <input type="checkbox" name="option2"/> Option 2
                      </label>
                      <select name="select2">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="card">
                <img src={sprite} alt="/"/>
                  <div class="card-details">
                    <div class="options">
                      <label>
                        <input type="checkbox" name="option1"/> Option 1
                      </label>
                      <select name="select1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                    <div class="options">
                      <label>
                        <input type="checkbox" name="option2"/> Option 2
                      </label>
                      <select name="select2">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="card">
                <img src={spritezero} alt="/"/>
                  <div class="card-details">
                    <div class="options">
                      <label>
                        <input type="checkbox" name="option1"/> Option 1
                      </label>
                      <select name="select1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                    <div class="options">
                      <label>
                        <input type="checkbox" name="option2"/> Option 2
                      </label>
                      <select name="select2">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
        <button className='drinks-addToCartButton'>
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

export default Drinks
