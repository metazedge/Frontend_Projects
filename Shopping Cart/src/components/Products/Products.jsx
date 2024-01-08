import React from 'react'
import products from '../../data'
import Card from '../Card/Card'
import './Products.scss'
const Products = ({addToCart}) => {
  return (
    <div className='products'>
      {
        products.map(item => (
          <Card item={item} key={item.id} addToCart={addToCart}/>
        ))
      }
    </div>
  )
}

export default Products