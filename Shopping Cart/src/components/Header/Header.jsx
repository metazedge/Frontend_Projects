import React from 'react'
import './Header.scss'
const Header = ({size, setShow}) => {
  return (
    <div className='header'>
      <div className="container">
        <div className="left" onClick={() => setShow(true)}>
          <h2>Shopping Cart</h2>
        </div>
        <div className="right" onClick={() => setShow(false)}>
        <i className="fas fa-cart-plus"></i>
          <div className="count">{size}</div>
        </div>
      </div>
    </div>
  )
}

export default Header