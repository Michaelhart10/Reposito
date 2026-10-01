import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, name, category, price }) => {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={image} alt={name} className="product-image" />
        <div className="product-overlay">
          <button className="quick-view-btn">QUICK VIEW</button>
        </div>
      </div>
      <div className="product-details">
        <span className="product-category">{category}</span>
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;