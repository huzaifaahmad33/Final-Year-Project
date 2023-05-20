import React from 'react'
import '../style/Deals.css'
import {Link} from 'react-router-dom'

function Deals() {
  return (
    <div>
      <div className="navlinks-deals">
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
      <main>
        No Deals Currently Available
      </main>
    </div>
  )
}

export default Deals
