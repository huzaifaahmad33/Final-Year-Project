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
import { AiOutlineArrowRight } from "react-icons/ai";


function Pizza() {
  return (
    <div>
      <section>
        <div className='pizza-heading'>
          <h1>Pizza</h1>
        </div>
        <div className='pizza-main'>
          <div className='pizza-card'>
            <Link to='/'>
              <img src={CrispyChickenPizza9Incher} alt='' />
            </Link>
            <div className='label'>
              <h6 className='pizza1'>Crispy 9 Incher-Serves 2-3 - Rs. 999</h6>
            </div>
          </div>
          <div className='pizza-card'>
            <Link to='/'>
              <img src={CrispyChickenPizza10Incher} alt='' />
            </Link>
            <div className='label'>
              <h6 className='pizza2'>Crispy 9 Incher-Serves 2-3 - Rs. 1199</h6>
            </div>
          </div>
          <div className='pizza-card'>
            <Link to='/'>
              <img src={fullv1} alt='' />
            </Link>
            <div className='label'>
              <h6 className='pizza3'>Oringinal Full-Serves 6-8 - Rs. 3399</h6>
            </div>
          </div>
          <div className='pizza-card'>
            <Link to='/'>
              <img src={halfandhalfv1} alt='' />
            </Link>
            <div className='label'>
              <h6 className='pizza4'>
                Original half-Serves 6-8 - Rs. 3399
              </h6>
            </div>
          </div>
          <div className='pizza-card'>
            <Link to='/'>
              <img src={original10incherv1} alt='' />
            </Link>
            <div className='label'>
              <h2 className='pizza5'>Original 10 Incher-Serves 2 - Rs. 1199</h2>
            </div>
          </div>
          <div className='pizza-card'>
            <Link to='/'>
              <img src={original15incherv1} alt='' />
            </Link>
            <div className='label'>
              <h2 className='pizza6'>Original 15 Incher-Serves 4 - Rs. 1949</h2>
            </div>
          </div>
          <div className='pizza-card'>
            <Link to='/'>
              <img src={pan9incherdesktop} alt='' />
            </Link>
            <div className='label'>
              <h2 className='pizza7'>Pan 9 Incher-Serve 2 - Rs. 999</h2>
            </div>
          </div>
          <div className='pizza-card'>
            <Link to='/'>
              <img src={pan12incherdesktop} alt='' />
            </Link>
            <div className='label'>
              <h2 className='pizza8'>Pan 12 Incher-Serve 3-4 - Rs. 1449</h2>
            </div>
          </div>
          <div className='pizza-card'>
            <Link to='/'>
              <img src={slicedesktop} alt='' />
            </Link>
            <div className='label'>
              <h2 className='pizza9'>Original Slice-Serve 1 - Rs. 599</h2>
            </div>
          </div>
          <div className='pizza-card'>
            <Link to='/'>
              <img src={thinza10incherv1} alt='' />
            </Link>
            <div className='label'>
              <h2 className='pizza10'>Thinza 10 Incher-Serve 2 - Rs. 1249</h2>
            </div>
          </div>
          <div className='pizza-card'>
            <Link to='/'>
              <img src={xtreme9incherv1} alt='' />
            </Link>
            <div className='label'>
              <h2 className='pizza11'>Xtreme 9 Incher-Serve 2-3 - Rs. 1099</h2>
            </div>
          </div>
          <div className='pizza-card'>
            <Link to='/'>
              <img src={xtreme12incherv1} alt='' />
            </Link>
            <div className='label'>
              <h2 className='pizza12'>Xtreme 12 Incher-Serve 3-4 - Rs. 1699</h2>
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
