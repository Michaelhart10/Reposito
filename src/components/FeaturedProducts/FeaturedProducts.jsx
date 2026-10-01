import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { featuredProducts, formatPrice } from '../../data/Products';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  return (
    <section className="featured-section">
      <div className="featured-container">
        <div className="featured-header">
          <span className="featured-label">OUR PICKS</span>
          <h2 className="featured-heading">Featured Products</h2>
        </div>

        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              category={product.category.toUpperCase()}
              price={formatPrice(product.price)}
            />
          ))}
        </div>

        <div className="featured-footer">
          <a href="/shop" className="view-all-btn">
            VIEW ALL PRODUCTS
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;