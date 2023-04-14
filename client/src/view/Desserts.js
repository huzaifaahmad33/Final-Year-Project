import React from 'react'
import '../style/Desserts.css'
import sweetsomethingsbanner from '../images/Banners/sweetsomethingsbanner.jpg'
import sweetsomethingsheading from '../images/Banners/sweet-somethings-heading.png'
import cake from '../images/Desserts/chocolate-cake.jpg'
import minilava from '../images/Desserts/mini-lava-cake.jpg'
import nutella from '../images/Desserts/mini-nutella.jpg'
import brownie from '../images/Desserts/nutella-brownie.jpg'
import { AiOutlineArrowRight } from "react-icons/ai";


function Desserts() {
  return (
    <div>
      <div className='dessertsbanner'>
        <img src={sweetsomethingsbanner} alt="dessertsbanner" />
      </div>
      <div className="dessertscenterimage">
        <img src={sweetsomethingsheading} alt="dessertscenterimage" />
      </div>
      <div className="dessertstatement">
        <p>14th Street Pizza loves a sweet ending. Go for one of our delightfully rich desserts and give your sweet tooth utmost <br /> satisfaction.</p>
      </div>
      <div class="main">
    <div class="card">
      <img src={cake} alt="/"/>
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
        <img src={minilava} alt="/"/>
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
          <img src={nutella} alt="/"/>
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
            <img src={brownie} alt="/"/>
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
        <button className='desserts-addToCartButton'>
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

export default Desserts
