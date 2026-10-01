import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  // Sample business casual products array
  const products = [
    {
      id: 1,
      name: "Ribbed Quarter-Zip Knit",
      category: "Knitwear",
      price: "₦85,000",
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      name: "Structured Oxford Shirt",
      category: "Shirting",
      price: "₦45,000",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      name: "Pleated Smart Chinos",
      category: "Trousers",
      price: "₦65,000",
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      name: "Dark Leather Loafers",
      category: "Footwear",
      price: "₦120,000",
      image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="featured-section">
      <div className="featured-container">
        
        {/* Header Block */}
        <div className="featured-header">
          <span className="featured-label">OUR PICKS</span>
          <h2 className="featured-heading">Featured Products</h2>
        </div>

        {/* 4-Product Grid */}
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              category={product.category}
              price={product.price}
            />
          ))}
        </div>

        {/* Bottom CTA Button */}
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