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
import { AiOutlineArrowRight } from "react-icons/ai";


function Pizza() {
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
        <div class="main">
    <div class="card">
      <img src={CrispyChickenPizza9Incher} alt="/"/>
        <div class="card-details">
          <div class="options">
            <label>
              <input type="checkbox" name="option1"/> 2 PCS
            </label>
            <select name="select1">
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
        <img src={CrispyChickenPizza10Incher} alt="/"/>
          <div class="card-details">
            <div class="options">
              <label>
                <input type="checkbox" name="option1"/> Cheesy Pockets
              </label>
              <select name="select1">
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
          <img src={fullv1} alt="/"/>
            <div class="card-details">
              <div class="options">
                <label>
                  <input type="checkbox" name="option1"/> NonSpicy
                </label>
                <select name="select1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div>
          </div>
          <div class="card">
            <img src={halfandhalfv1} alt="/"/>
              <div class="card-details">
                <div class="options">
                  <label>
                    <input type="checkbox" name="option1"/> 2 PCS
                  </label>
                  <select name="select1">
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
              <img src={original10incherv1} alt="/"/>
                <div class="card-details">
                  <div class="options">
                    <label>
                      <input type="checkbox" name="option1"/> 2 PCS
                    </label>
                    <select name="select1">
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
              <img src={original15incherv1} alt="/"/>
                <div class="card-details">
                  <div class="options">
                    <label>
                      <input type="checkbox" name="option1"/> 2 PCS
                    </label>
                    <select name="select1">
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
              <img src={pan9incherdesktop} alt="/"/>
                <div class="card-details">
                  <div class="options">
                    <label>
                      <input type="checkbox" name="option1"/> 2 PCS
                    </label>
                    <select name="select1">
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
              <img src={pan12incherdesktop} alt="/"/>
                <div class="card-details">
                  <div class="options">
                    <label>
                      <input type="checkbox" name="option1"/> 2 PCS
                    </label>
                    <select name="select1">
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
    </div>
        <button className='pizza-addToCartButton'>
          Add to Cart
          <AiOutlineArrowRight></AiOutlineArrowRight>
          </button>
          <AiOutlineArrowRight className='arrow'></AiOutlineArrowRight>
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
