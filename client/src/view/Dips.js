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
function Dips() {
  return (
    <div>
      <div className='dipsbanner'>
        <img src={dipsbanner} alt="dipsbanner" />
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
        <img src={butter} alt="/"/>
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
          <img src={honey} alt="/"/>
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
            <img src={ranch} alt="/"/>
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
              <img src={sour} alt="/"/>
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
                <img src={southwest} alt="/"/>
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
