import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import './CTA.css';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section className="cta-section">
      <div className="cta-container">
        
        {/* Header Block */}
        <div className="cta-header">
          <span className="cta-label">STAY CONNECTED</span>
          <h2 className="cta-heading">Style Delivered to Your Inbox.</h2>
          <p className="cta-description">
            Be the first to know about new business casual collections, exclusive pieces, and private seasonal access.
          </p>
        </div>

        {/* Newsletter Form Area */}
        <div className="cta-form-wrapper">
          {isSubmitted ? (
            <div className="cta-success-message">
              <CheckCircle2 size={20} className="success-icon" />
              <span>Thank you for subscribing to Mic & Jays.</span>
            </div>
          ) : (
            <form className="cta-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <Mail size={18} className="input-icon" />
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <button type="submit" className="subscribe-btn">
                <span>SUBSCRIBE</span>
                <ArrowRight size={16} />
              </button>
            </form>
          )}
          <p className="cta-privacy-note">
            By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CTA;