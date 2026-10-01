import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        {/* Left Column: Hero Text & Call to Action */}
        <div className="hero-text-content">
          
          {/* Small Label */}
          <div className="hero-label">
            <Sparkles size={14} className="hero-label-icon" />
            <span>BUSINESS CASUAL EDIT • 2026</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-heading">
            Effortless Elegance. <br />
            <span className="hero-heading-serif">Everyday Versatility.</span>
          </h1>

          {/* Short Description */}
          <p className="hero-description">
            Discover refined layering pieces, premium quarter-zips, crisp shirting, and handcrafted leather loafers designed for seamless modern workwear.
          </p>

          {/* Primary Shop Button & Secondary CTA */}
          <div className="hero-actions">
            <a href="/shop" className="hero-primary-btn">
              <span>SHOP NOW</span>
              <ArrowRight size={16} />
            </a>
            <a href="#capsule" className="hero-secondary-btn">
              VIEW CAPSULE COLLECTION
            </a>
          </div>

          {/* Micro Value Proposition Badges */}
          <div className="hero-trust-badges">
            <div className="trust-item">
              <span className="trust-number">100%</span>
              <span className="trust-text">Merino Wool & Silk Ties</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-number">ITALIAN</span>
              <span className="trust-text">Handcrafted Leather Shoes</span>
            </div>
          </div>

        </div>

        {/* Right Column: Hero Fashion Image */}
        <div className="hero-image-wrapper">
          <div className="hero-image-frame">
            <img 
              src="https://unsplash.com/photos/red-and-white-floral-textile-skhWkJ6Sm1o" 
              alt="MIC & JAYS Business Casual Quarter Zip & Shirt Layering" 
              className="hero-image"
            />
            {/* Corner Badge Overlay */}
            <div className="image-overlay-badge">
              <span className="badge-title">THE SMART CASUAL SET</span>
              <span className="badge-sub">ZIP KNIT • OXFORD SHIRT • LOAFERS</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;