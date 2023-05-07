import React from 'react'
import '../style/Sidelines.css'
import sidelinesbanner from '../images/Banners/sidelinesbanner.jpg'
import sidelinesheading from '../images/Banners/sidelines-heading.png'
import cheesybread from '../images/Sidelines/cheesy-bread.jpg'
import cheesypockets from '../images/Sidelines/cheesy-pockets.jpg'
import chickybites from '../images/Sidelines/chicky-bites.jpg'
import garlicbread from '../images/Sidelines/garlic-bread.jpg'
import potatoskins from '../images/Sidelines/potato-skins.jpg'
import potatowedges from '../images/Sidelines/potato-wedges.jpg'
import socialbox from '../images/Sidelines/social-box.jpg'
import wings from '../images/Sidelines/wings.jpg'
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom'


function Sidelines() {
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
    <div class="main">
    <div class="card">
      <img src={cheesybread} alt="/"/>
        <div class="card-details">
          <div class="options">
            <label>
              <input type="checkbox" name="option1"/> 2 PCS
            </label>
            <select name="select1">
            <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <label>
              <h2>Rs 199</h2>
            </label>
          </div>
          <div class="options">
            <label>
              <input type="checkbox" name="option2"/> 5 PCS
            </label>
            <select name="select2">
            <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <label>
              <h2>Rs 449</h2>
            </label>
          </div>
        </div>
      </div>
      <div class="card">
        <img src={cheesypockets} alt="/"/>
          <div class="card-details">
            <div class="options">
              <label>
                <input type="checkbox" name="option1"/> Cheesy Pockets
              </label>
              <select name="select1">
              <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <label>
              <h2>Rs 399</h2>
            </label>
            </div>
          </div>
        </div>
        <div class="card">
          <img src={chickybites} alt="/"/>
            <div class="card-details">
              <div class="options">
                <label>
                  <input type="checkbox" name="option1"/> NonSpicy
                </label>
                <select name="select1">
                <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div>
          </div>
          <div class="card">
            <img src={garlicbread} alt="/"/>
              <div class="card-details">
                <div class="options">
                  <label>
                    <input type="checkbox" name="option1"/> 2 PCS
                  </label>
                  <select name="select1">
                  <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                  <label>
              <h2>Rs 149</h2>
            </label>
                </div>
                <div class="options">
                  <label>
                    <input type="checkbox" name="option2"/> 5 PCS
                  </label>
                  <select name="select2">
                  <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                  <label>
              <h2>Rs 349</h2>
            </label>
                </div>
              </div>
            </div>
            <div class="card">
              <img src={potatoskins} alt="/"/>
                <div class="card-details">
                  <div class="options">
                    <label>
                      <input type="checkbox" name="option1"/> 2 PCS
                    </label>
                    <select name="select1">
                    <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    <label>
              <h2>Rs 249</h2>
            </label>
                  </div>
                  <div class="options">
                    <label>
                      <input type="checkbox" name="option2"/> 5 PCS
                    </label>
                    <select name="select2">
                    <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    <label>
              <h2>Rs 449</h2>
            </label>
                  </div>
                </div>
              </div>
              <div class="card">
                <img src={potatowedges} alt="/"/>
                  <div class="card-details">
                    <div class="options">
                      <label>
                        <input type="checkbox" name="option1"/> 90g
                      </label>
                      <select name="select1">
                      <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <label>
              <h2>Rs 299</h2>
            </label>
                    </div>
                    <div class="options">
                      <label>
                        <input type="checkbox" name="option2"/> 175g
                      </label>
                      <select name="select2">
                      <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <label>
              <h2>Rs 499</h2>
            </label>
                    </div>
                  </div>
                </div>
                <div class="card">
                <img src={wings} alt="/"/>
                  <div class="card-details">
                    <div class="options">
                      <label>
                        <input type="checkbox" name="option1"/> Spicy
                      </label>
                      <select name="select1">
                      <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <label>
              <h2>Rs 499</h2>
            </label>
                    </div>
                    <div class="options">
                      <label>
                        <input type="checkbox" name="option2"/> BBQ
                      </label>
                      <select name="select2">
                      <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <label>
              <h2>Rs 499</h2>
            </label>
                    </div>
                  </div>
                </div>
                <div class="card">
                <img src={socialbox} alt="/"/>
                  <div class="card-details">
                    <div class="options">
                      <label>
                        <input type="checkbox" name="option1"/> Special
                      </label>
                      <select name="select1">
                      <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <label>
              <h2>Rs 1299</h2>
            </label>
                    </div>
                  </div>
                </div>
              </div>
        <button className='sidelines-addToCartButton'>
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

export default Sidelines
