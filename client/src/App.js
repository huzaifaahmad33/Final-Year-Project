import './App.css'
import Navbar from './view/Navbar'
import Footer from './view/Footer'
import Menu from './view/Menu'
import Deals from './view/Deals'
import Contactus from './view/Contactus'
import Careers from './view/Careers'
import Speakyourmind from './view/Speakyourmind'
import Aboutus from './view/Aboutus'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/menu' element={<Menu/>}/>
      <Route exact path='/deals' element={<Deals/>}/>
      <Route exact path='/contact-us' element={<Contactus/>}/>
      <Route exact path='/careers' element={<Careers/>}/>
      <Route exact path='/Speak-your-mind' element={<Speakyourmind/>}/>
      <Route exact path='/about-us' element={<Aboutus/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
