import React from 'react'
import'../Card.css'
function Card ({product,onClick,isBestSeller}) {
  return (
    <div
      className={`card ${isBestSeller ? "best-seller" : ""}`}
      onClick={onClick}
      >
      <h2>{product.name}</h2>
      <p>{product.price} $</p>
      <p>{product.model}</p>
      <p>{product.brand}</p>
      {isBestSeller && <p className='best-seller-label'>bestSeller</p>}
    </div>
  );
}

export default Card;
