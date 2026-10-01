import React, { useState, useEffect } from 'react';
import { 
  Search, ShoppingBag, Heart, User, ChevronDown, 
  ChevronUp, X, ArrowRight, Menu 
} from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState(null);
  const [currency, setCurrency] = useState('USD ($)');
  const [cartCount, setCartCount] = useState(2);

  // Handle scroll detection for sticky navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu or modals are open
  useEffect(() => {
    if (isMobileMenuOpen || isSearchOpen || isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen, isSearchOpen, isCartOpen]);

  const toggleMobileAccordion = (section) => {
    setMobileExpandedSection(prev => prev === section ? null : section);
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="currency-selector">
            <span>CURRENCY:</span>
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
              <option value="USD ($)">USD ($)</option>
              <option value="NGN (₦)">NGN (₦)</option>

              {/* <option value="EUR (€)">EUR (€)</option> */}
              {/* <option value="GBP (£)">GBP (£)</option> */}
            </select>
          </div>
          <div className="announcement-text">
            COMPLIMENTARY WORLDWIDE EXPRESS SHIPPING ON ORDERS OVER $500
          </div>
          <div className="top-bar-links">
            <a href="#client-services">CLIENT SERVICES</a>
            <a href="#boutiques">STORES</a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className={`navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="navbar-container">
          
          {/* Left Navigation Links */}
          <nav className="nav-links-left">
            <div 
              className="nav-item-wrapper"
              onMouseEnter={() => setActiveMenu('men')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <a href="#men" className="nav-link">
                GENTLEMEN <ChevronDown className="chevron-icon" />
              </a>

              {/* Mega Menu Dropdown */}
              {activeMenu === 'men' && (
                <div className="mega-menu">
                  <div className="mega-menu-content">
                    <div className="menu-column">
                      <h4>NEW ARRIVALS</h4>
                      <ul>
                        <li><a href="#autumn-winter">Autumn / Winter '26</a></li>
                        <li><a href="#tailoring">Bespoke Tailoring</a></li>
                        <li><a href="#essential-cashmere">Essential Cashmere</a></li>
                      </ul>
                    </div>
                    <div className="menu-column">
                      <h4>CLOTHING</h4>
                      <ul>
                        <li><a href="#jackets">Coats & Trenchcoats</a></li>
                        <li><a href="#suits">Suits & Blazers</a></li>
                        <li><a href="#knitwear">Knitwear & Polo Shirts</a></li>
                        <li><a href="#trousers">Trousers & Chinos</a></li>
                      </ul>
                    </div>
                    <div className="menu-column">
                      <h4>ACCESSORIES</h4>
                      <ul>
                        <li><a href="#leather">Leather Goods</a></li>
                        <li><a href="#footwear">Loafers & Dress Shoes</a></li>
                        <li><a href="#ties">Silk Ties & Pocket Squares</a></li>
                      </ul>
                    </div>
                    <div className="menu-featured">
                      <div className="featured-card">
                        <img 
                          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80" 
                          alt="Gentlemen Tailoring" 
                        />
                        <div className="featured-overlay">
                          <span>THE HERITAGE SUIT</span>
                          <a href="#shop-now" className="featured-btn">EXPLORE <ArrowRight size={14} /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div 
              className="nav-item-wrapper"
              onMouseEnter={() => setActiveMenu('women')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <a href="#women" className="nav-link">
                LADIES <ChevronDown className="chevron-icon" />
              </a>
              {/* Mega Menu Dropdown */}
              {activeMenu === 'women' && (
                <div className="mega-menu">
                  <div className="mega-menu-content">
                    <div className="menu-column">
                      <h4>COLLECTIONS</h4>
                      <ul>
                        <li><a href="#silk-dresses">Silk & Velvet Dresses</a></li>
                        <li><a href="#cashmere-coats">Cashmere Coats</a></li>
                        <li><a href="#tailored-sets">Tailored Sets</a></li>
                      </ul>
                    </div>
                    <div className="menu-column">
                      <h4>ACCESSORIES</h4>
                      <ul>
                        <li><a href="#handbags">Handbags & Clutches</a></li>
                        <li><a href="#scarves">Silk Scarves</a></li>
                        <li><a href="#footwear-w">Heels & Loafers</a></li>
                      </ul>
                    </div>
                    <div className="menu-featured">
                      <div className="featured-card">
                        <img 
                          src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80" 
                          alt="Ladies Collection" 
                        />
                        <div className="featured-overlay">
                          <span>SILK & CASHMERE</span>
                          <a href="#shop-now" className="featured-btn">EXPLORE <ArrowRight size={14} /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* <a href="#bespoke" className="nav-link">BESPOKE</a> */}
            <a href="#heritage" className="nav-link">OUR HERITAGE</a>
          </nav>

          {/* Center Brand Logo */}
          <div className="navbar-logo-wrapper">
            <a href="/" className="navbar-logo">
              MIC & JAYS
            </a>
            <span className="logo-subtext">LONDON • EST. 2026</span>
          </div>

          {/* Right Action Icons */}
          <div className="nav-actions-right">
            <button 
              className="action-btn" 
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <a href="#account" className="action-btn" aria-label="Account">
              <User size={20} />
            </a>
            <a href="#wishlist" className="action-btn" aria-label="Wishlist">
              <Heart size={20} />
            </a>
            <button 
              className="action-btn cart-btn" 
              onClick={() => setIsCartOpen(true)}
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </div>

        </div>
      </header>

      {/* Full-Screen Search Modal Overlay */}
      {isSearchOpen && (
        <div className="search-overlay">
          <button className="close-btn" onClick={() => setIsSearchOpen(false)}>
            <X size={28} />
          </button>
          <div className="search-container">
            <span className="search-label">SEARCH MIC & JAYS</span>
            <div className="search-input-wrapper">
              <input 
                type="text" 
                placeholder="Search for Cashmere Coats, Tailored Blazers, Silk Ties..." 
                autoFocus 
              />
              <Search size={24} className="search-icon" />
            </div>
            <div className="quick-links">
              <span>SUGGESTED SEARCHES:</span>
              <a href="#search-cashmere">Double-Breasted Coat</a>
              <a href="#search-tuxedo">Tuxedo Suits</a>
              <a href="#search-loafers">Penny Loafers</a>
              <a href="#search-scarf">Silk Scarves</a>
            </div>
          </div>
        </div>
      )}

      {/* Slide-over Shopping Cart Drawer */}
      {isCartOpen && (
        <div className="cart-drawer-backdrop" onClick={() => setIsCartOpen(false)}>
          <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <h3>YOUR SHOPPING BAG ({cartCount})</h3>
              <button onClick={() => setIsCartOpen(false)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="cart-body">
              {/* Cart Item Sample 1 */}
              <div className="cart-item">
                <img 
                  src="https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=200&q=80" 
                  alt="Double-Breasted Wool Blazer" 
                />
                <div className="cart-item-details">
                  <h4>Double-Breasted Wool Blazer</h4>
                  <p className="item-meta">Size: 42R | Color: Midnight Navy</p>
                  <p className="item-price">$1,450.00</p>
                </div>
              </div>

              {/* Cart Item Sample 2 */}
              <div className="cart-item">
                <img 
                  src="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=200&q=80" 
                  alt="Pure Cashmere Sweater" 
                />
                <div className="cart-item-details">
                  <h4>Pure Cashmere Turtleneck</h4>
                  <p className="item-meta">Size: L | Color: Oatmeal</p>
                  <p className="item-price">$890.00</p>
                </div>
              </div>
            </div>

            <div className="cart-footer">
              <div className="cart-subtotal">
                <span>SUBTOTAL</span>
                <span className="subtotal-amount">$2,340.00</span>
              </div>
              <p className="tax-note">Taxes and duties calculated at checkout</p>
              <button className="checkout-btn">PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;