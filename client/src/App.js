import './App.css'
import React, { useState } from "react";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Deals from './components/Deals'
import Contactus from './components/Contactus'
import Careers from './components/Careers'
import Speakyourmind from './components/Speakyourmind'
import Aboutus from './components/Aboutus'
import Pizza from './components/Pizza'
import Sidelines from './components/Sidelines'
import Desserts from './components/Desserts'
import Drinks from './components/Drinks'
import Dips from './components/Dips'
import Cart from './components/Cart'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  return (
    <>
    <Navbar setShow={setShow} size={cart.length}/>
    <Routes>
      <Route exact path='/' element={<Menu/>}/>
      <Route exact path='/deals' element={<Deals/>}/>
      <Route exact path='/contact-us' element={<Contactus/>}/>
      <Route exact path='/careers' element={<Careers/>}/>
      <Route exact path='/speak-your-mind' element={<Speakyourmind/>}/>
      <Route exact path='/about-us' element={<Aboutus/>}/>
      <Route exact path='/pizza' element={show ? (
        <Pizza handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}/>
      <Route exact path='/side-lines' element={show ? (
        <Sidelines handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}/>
      <Route exact path='/desserts' element={show ? (
        <Desserts handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}/>
      <Route exact path='/drinks' element={show ? (
        <Drinks handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}/>
      <Route exact path='/dips' element={show ? (
        <Dips handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}/>
      <Route exact path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
