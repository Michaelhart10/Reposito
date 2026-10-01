import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* 4-Column Main Grid */}
        <div className="footer-grid">
          
          {/* Column 1 — Brand */}
          <div className="footer-col brand-col">
            <h3 className="footer-brand-title">MIC & JAYS</h3>
            <p className="footer-brand-tagline">
              Fashion that speaks for itself. Elevating everyday workwear with sartorial tailoring and timeless business casual essentials.
            </p>
            {/* <div className="footer-social-links">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-icon-btn">
                <Instagram size={18} />
              </a>
              
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok" className="social-icon-btn">
                <Twitter size={18} />
              </a>
            </div> */}
          </div>

          {/* Column 2 — Shop */}
          <div className="footer-col">
            <h4 className="footer-heading">SHOP</h4>
            <ul className="footer-links">
              <li><a href="/shop/men">Gentlemen</a></li>
              <li><a href="/shop/women">Ladies</a></li>
              <li><a href="/shop/accessories">Accessories & Loafers</a></li>
              <li><a href="/shop/new">New Arrivals</a></li>
              <li><a href="/shop/collections">Capsule Collections</a></li>
            </ul>
          </div>

          {/* Column 3 — Customer Care */}
          <div className="footer-col">
            <h4 className="footer-heading">CUSTOMER CARE</h4>
            <ul className="footer-links">
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#shipping">Shipping & Delivery</a></li>
              <li><a href="#returns">Returns & Exchanges</a></li>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#sizeguide">Size & Fit Guide</a></li>
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">CONTACT</h4>
            <ul className="footer-contact-info">
              <li>
                <Mail size={16} className="contact-icon" />
                <a href="mailto:hello@micandjays.com">hello@micandjays.com</a>
              </li>
              <li>
                <Phone size={16} className="contact-icon" />
                <a href="tel:+2348000000000">+234 800 000 0000</a>
              </li>
              <li>
                <MapPin size={16} className="contact-icon" />
                <span>Lagos • Abuja • Port Harcourt, Nigeria</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-divider" />
          <div className="footer-bottom-content">
            <p className="copyright-text">
              © 2026 Mic & Jays Fashion. All rights reserved.
            </p>
            <div className="legal-links">
              <a href="#privacy">Privacy Policy</a>
              <span className="legal-dot">•</span>
              <a href="#terms">Terms & Conditions</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;