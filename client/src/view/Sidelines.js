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


function Sidelines() {
  return (
    <div>
      <div className='sidelinesbanner'>
        <img src={sidelinesbanner} alt="sidelinesbanner" />
      </div>
      <div className="sidelinescenterimage">
        <img src={sidelinesheading} alt="sidelinescenterimage" />
      </div>
      <div className="sidelinestatement">
        <p>In the mood for an extra something? Our sides are way too good to sideline. Don’t take our word for it though, let <br /> your taste buds decide for themselves.</p>
      </div>
    <div class="main">
    <div class="card">
      <img src={cheesybread} alt="/"/>
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
        <img src={cheesypockets} alt="/"/>
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
          <img src={chickybites} alt="/"/>
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
            <img src={garlicbread} alt="/"/>
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
              <img src={potatoskins} alt="/"/>
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
                <img src={potatowedges} alt="/"/>
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
                <img src={wings} alt="/"/>
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
                <img src={socialbox} alt="/"/>
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
