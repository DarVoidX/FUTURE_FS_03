import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-jet">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img 
              src="/images/logo.png" 
              alt="ZENOS Fitness Club" 
              className="footer-logo"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150x50?text=ZENOS+LOGO'; }}
            />
            <p className="footer-tagline">
              Train. Perform. Transform.
            </p>
            <p className="footer-desc">
              India's most premium fitness destination. We are committed to helping you build your ultimate physique and mindset.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#trainers">Our Trainers</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Support</h4>
            <ul>
              <li><a href="#membership">Membership Options</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#"><FaInstagram size={20} /></a>
              <a href="#"><FaFacebook size={20} /></a>
              <a href="#"><FaTwitter size={20} /></a>
              <a href="#"><FaYoutube size={20} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-custom-message" style={{ marginBottom: '10px', fontSize: '1rem', color: 'var(--color-pure-white)' }}>
            If you like this website, contact us on Instagram: <a href="https://instagram.com/dar.shanckm" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-crimson-red)', fontWeight: 'bold' }}>@dar.shanckm</a> | Phone No: 7892611628
          </p>
          <p>&copy; 2026 ZENOS Fitness Club. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
