import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { products, formatPrice } from '../../data/products';
import './Shop.css';

const categories = ['all', 'men', 'women', 'accessories'];

const Shop = () => {
  return (
    <div className="shop-page">
      <div className="shop-container">
        <header className="shop-header">
          <span className="shop-label">CATALOGUE</span>
          <h1 className="shop-title">SHOP</h1>
          <p className="shop-description">
            Discover our complete wardrobe of business casual essentials, tailored for modern sophistication.
          </p>
        </header>

        <div className="shop-controls-bar">
          <nav className="category-tabs" aria-label="Product Categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`tab-btn ${category === 'all' ? 'active' : ''}`}
              >
                {category === 'all' ? 'ALL' : category.toUpperCase()}
              </button>
            ))}
          </nav>

          <div className="sort-wrapper">
            <label htmlFor="sort-select" className="sort-label">
              SORT BY
            </label>
            <select id="sort-select" defaultValue="featured" className="sort-dropdown">
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        <div className="results-count">Showing {products.length} pieces</div>

        <main className="shop-products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              category={product.category.toUpperCase()}
              price={formatPrice(product.price)}
            />
          ))}
        </main>
      </div>
    </div>
  );
};

export default Shop;
