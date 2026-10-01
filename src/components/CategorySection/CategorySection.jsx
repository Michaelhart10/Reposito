import React from 'react';
import { ArrowRight } from 'lucide-react';
import './CategorySection.css';

const CategorySection = () => {
  const categories = [
    {
      id: 'men',
      title: 'Gentlemen',
      subtitle: 'Layered knits, Oxford shirts & chinos',
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&q=80',
      link: '/shop/men'
    },
    {
      id: 'women',
      title: 'Ladies',
      subtitle: 'Tailored trousers, blazers & silk tops',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      link: '/shop/women'
    },
    {
      id: 'accessories',
      title: 'Accessories',
      subtitle: 'Loafers, eyewear & leather accents',
      image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80',
      link: '/shop/accessories'
    }
  ];

  return (
    <section className="category-section">
      <div className="category-container">
        
        {/* Section Heading Header */}
        <div className="category-header">
          <span className="category-label">COLLECTIONS</span>
          <h2 className="category-heading">Shop by Category</h2>
          <p className="category-subheading">Explore our carefully curated business casual essentials</p>
        </div>

        {/* 3-Category Cards Grid */}
        <div className="category-grid">
          {categories.map((category) => (
            <a href={category.link} key={category.id} className="category-card">
              <div className="category-image-wrapper">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="category-image" 
                />
                <div className="category-overlay-gradient" />
              </div>

              <div className="category-card-content">
                <span className="category-card-subtitle">{category.subtitle}</span>
                <h3 className="category-card-title">{category.title}</h3>
                <div className="category-card-link">
                  <span>SHOP NOW</span>
                  <ArrowRight size={16} className="category-arrow-icon" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategorySection;