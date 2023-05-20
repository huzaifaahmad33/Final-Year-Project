import './App.css'
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

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Menu/>}/>
      <Route exact path='/deals' element={<Deals/>}/>
      <Route exact path='/contact-us' element={<Contactus/>}/>
      <Route exact path='/careers' element={<Careers/>}/>
      <Route exact path='/speak-your-mind' element={<Speakyourmind/>}/>
      <Route exact path='/about-us' element={<Aboutus/>}/>
      <Route exact path='/pizza' element={<Pizza/>}/>
      <Route exact path='/side-lines' element={<Sidelines/>}/>
      <Route exact path='/desserts' element={<Desserts/>}/>
      <Route exact path='/drinks' element={<Drinks/>}/>
      <Route exact path='/dips' element={<Dips/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
