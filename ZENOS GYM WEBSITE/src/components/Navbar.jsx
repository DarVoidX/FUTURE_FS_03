import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#programs' },
    { name: 'Transformation', href: '#transformation' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Membership', href: '#membership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo-link">
          {/* Logo uploaded by user */}
          <img src="/images/logo.png" alt="ZENOS" className="nav-logo" onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150x50?text=ZENOS+LOGO'; }} />
        </a>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="nav-link">{link.name}</a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a href="#join" className="btn-primary join-btn">Join Now</a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
          <li>
             <a href="#join" className="btn-primary" onClick={() => setMobileMenuOpen(false)}>Join Now</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
