import React from 'react'
import { Link } from 'react-router-dom'
import { Products } from '../../redux/slices'

import './ProductsCard.css'

export const ProductsCart: React.FC<Products> = ({ id, image, price, name, category}) => {
  return (
    <Link to={`product/${id}`} className="card">
      <div className="img-box">
        <img src={image} alt={name} />
      </div>
      <h4>{price} $</h4>
      <h3>{name}</h3>
      <p>{category}</p>
      <div className="icon-plus">
        <i className="ri-add-line"></i>
      </div>
    </Link>
  )
}