import React from 'react'
import {Link} from 'react-router-dom'
import '../style/Cart.css'

function Cart() {
  return (
    <div>
      <div className="navlinks-cart">
        <ul>
          <li><Link to='/pizza'>Pizza</Link></li>
          <li><Link to='/side-lines'>Sidelines</Link></li>
          <li><Link to='/desserts'>Desserts</Link></li>
          <li><Link to='/deals'>Deals</Link></li>
          <li><Link to='/drinks'>Drinks</Link></li>
          <li><Link to='/dips'>Dips</Link></li>
        </ul>
        <hr />
        <div className='main'>
          <div className='left'></div>
          <div className='right'></div>
        </div>
        </div>
    </div>
  )
}

export default Cart
