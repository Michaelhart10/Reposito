import React from 'react';
import { ArrowRight } from 'lucide-react';
import './BrandSection.css';

const BrandSection = () => {
  return (
    <section className="brand-banner-section">
      {/* Background Image Container */}
      <div className="brand-banner-bg">
        <img 
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=2000&q=80" 
          alt="MIC & JAYS Business Casual Wardrobe Heritage" 
          className="brand-banner-img"
        />
        <div className="brand-banner-overlay" />
      </div>

      {/* Hero-style Center Content */}
      <div className="brand-banner-content">
        <span className="brand-banner-label">THE M&J COLLECTION</span>
        
        <h2 className="brand-banner-headline">
          STYLE THAT SPEAKS FOR ITSELF.
        </h2>

        <p className="brand-banner-description">
          Discover structured knits, crisp shirting, and refined tailoring designed for everyday confidence and effortless elegance.
        </p>

        <a href="/shop" className="brand-banner-btn">
          <span>EXPLORE COLLECTION</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
};

export default BrandSection;