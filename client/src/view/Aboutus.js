import React from 'react';
import '../style/Aboutus.css';
import aboutusbanner from '../images/Banners/aboutusbanner.jpg';

function Aboutus() {
  return (
    <div>
      <div className='aboutusbanner'>
        <img src={aboutusbanner} alt="aboutusbanner" />
      </div>
      <div className='aboutusheading'>
        <h1>About Us</h1>
      </div>
      <div className='aboutuspara'>
      We are proud to be the nationally recognized pizza brand. Starting from a mere neighborhood pizza delivery place in Karachi, we have now expanded to various areas of Pakistan including the metropolitan cities Karachi, Islamabad, and Multan, with seven kitchens in a matter of less than five years. We are the pioneers in introducing the New York style 20-Inch hand-tossed pizza in Pakistan which is customizable to every detail. We are the initiators of the 'One Slice is a Meal' concept - never before introduced in Pakistan. Our success lies in the unending devotion to keep delivering the biggest, yummiest pizza in town with the use of freshest toppings, the finest sauces and only the most delectable cheese on its New York Style hand-tossed pizzas, fuelled by the love, encouragement and feedback of our fans.
      </div>
      <div className='aboutuspizza'>
      -------------------------------------
        <ion-icon name='pizza-outline'></ion-icon>
        -------------------------------------
      </div>
    </div>
  );
}

export default Aboutus;
