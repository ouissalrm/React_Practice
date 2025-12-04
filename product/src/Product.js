import React from 'react'

export default function Product({product}) {
  return (
    <div className='product-card'>
    <img src={product.thumbnail} alt='imagepc' className="product-img" />
    <strong className="product-title">{product.title}</strong> 
    <p className="product-price">{product.price} </p>
    <button className="product-btn">Ajouter Au Panier</button>
    
    </div>
  )
}
