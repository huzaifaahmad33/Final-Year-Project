import './App.css'
import Navbar from './view/Navbar'
import Footer from './view/Footer'
import Menu from './view/Menu'
import Deals from './view/Deals'
import Contactus from './view/Contactus'
import Careers from './view/Careers'
import Speakyourmind from './view/Speakyourmind'
import Aboutus from './view/Aboutus'
import Pizza from './view/Pizza'
import Sidelines from './view/Sidelines'
import Desserts from './view/Desserts'
import Drinks from './view/Drinks'
import Dips from './view/Dips'
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
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
