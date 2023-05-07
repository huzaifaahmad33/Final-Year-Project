import React from 'react'
import '../style/Menu.css'
import pizza from '../images/Menu/pizza.jpg'
import dips from '../images/Menu/dips.jpg'
import desserts from '../images/Menu/desserts.jpg'
import drinks from '../images/Menu/drinks.jpg'
import sidelines from '../images/Menu/sidelines.jpg'
import deals from '../images/Menu/deals.jpg'
import homebanner from '../images/slider/homebanner.png'
import homebannersupersundaypsldeal from '../images/slider/homebannersupersundaypsldeal.jpg'
import midnightbanner from '../images/slider/midnightbanner.jpg'
import pancrustbanner from '../images/slider/pancrustbanner.jpg'
import stuffedcrustbanner from '../images/slider/stuffedcrustbanner.jpg'
import summerdealbanner from '../images/slider/summerdealbanner.jpg'
import XtremePizza from '../images/slider/XtremePizza.jpg'
import chickencluckerbanner from '../images/slider/1920x450-chicken-clucker-banner.png'
import pepronibanner from '../images/slider/1920x450-double-peproni-banner.png'
import { Link } from 'react-router-dom'
import HeroSlider, { Slide } from 'hero-slider';


const slides = [
  {
    backgroundImage: `url(${pepronibanner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
  },
  {
    backgroundImage: `url(${chickencluckerbanner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
  },
  {
    backgroundImage: `url(${XtremePizza})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
  },
  {
    backgroundImage: `url(${homebanner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  {
    backgroundImage: `url(${homebannersupersundaypsldeal})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
  },
  {
    backgroundImage: `url(${midnightbanner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
  },
  {
    backgroundImage: `url(${pancrustbanner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
  },
  {
    backgroundImage: `url(${stuffedcrustbanner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
  },
  {
    backgroundImage: `url(${summerdealbanner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
  },
];

function Menu() {
  const handleBeforeChange = (previousSlide, nextSlide) => {
    console.log('onBeforeChange', previousSlide, nextSlide);
  };

  const handleChange = (nextSlide) => {
    console.log('onChange', nextSlide);
  };

  const handleAfterChange = (nextSlide) => {
    console.log('onAfterChange', nextSlide);
  };
  return (
    <div>
      <HeroSlider className='slider'
        slidingAnimation='left_to_right'
        orientation='horizontal'
        initialSlide={1}
        onBeforeChange={handleBeforeChange}
        onChange={handleChange}
        onAfterChange={handleAfterChange}
        settings={{
          slidingDuration: 250,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButtons: true,
          autoPlayDuration: 3000,
        }}
        height={'350px'}
      >
        {slides.map((slide, index) => (
          <Slide key={index} background={slide} />
        ))}
      </HeroSlider>
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
                <h1 className='pizza'>Pizza</h1>
              </div>
            </div>
            <div className="card">
              <Link to="/side-lines">
                <img src={sidelines} alt="" />
              </Link>
              <div className="label">
                <h1 className='sidelines'>Sidelines</h1>
              </div>
            </div>
            <div className="card">
              <Link to="/desserts">
                <img src={desserts} alt="" />
              </Link>
              <div className="label">
                <h1 className='desserts'>Desserts</h1>
              </div>
            </div>
            <div className="card">
              <Link to="/deals">
                <img src={deals} alt="" />
              </Link>
              <div className="label">
                <h1 className='deals'>Deals</h1>
              </div>
            </div>
            <div className="card">
              <Link to="/drinks">
                <img src={drinks} alt="" />
              </Link>
              <div className="label">
                <h1 className='drinks'>Drinks</h1>
              </div>
            </div>
            <div className="card">
              <Link to="/dips">
                <img src={dips} alt="" />
              </Link>
              <div className="label">
                <h1 className='dips'>Dips</h1>
              </div>
            </div>
          </div>
          <div className='aboutuspizza'>
      -------------------------------------
        <ion-icon name='pizza-outline'></ion-icon>
        -------------------------------------
      </div>
      </section>
    </div>
  )
}

export default Menu