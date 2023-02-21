import React from 'react'
import '../style/Menu.css'
//import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div>
      <section>
        <div className='menu-heading'>
          <h1>Menu</h1>
        </div>
          <div className="menu-main">
            <div className="menu-pizza">1</div>
            <div className="menu-sidelines">2</div>
            <div className="menu-desserts">3</div>
            <div className="menu-deals">4</div>
            <div className="menu-drinks">5</div>
            <div className="menu-dips">6</div>
          </div>
      </section>
    </div>
  )
}

export default Menu