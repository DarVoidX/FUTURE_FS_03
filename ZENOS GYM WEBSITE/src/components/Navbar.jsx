import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home', isHash: true },
    { name: 'Programs', href: '/#programs', isHash: true },
    { name: 'Nutrition', href: '/nutrition', isHash: false },
    { name: 'Transformation', href: '/#transformation', isHash: true },
    { name: 'Trainers', href: '/#trainers', isHash: true },
    { name: 'Membership', href: '/#membership', isHash: true },
    { name: 'Tools', href: '/tools', isHash: false },
    { name: 'Contact', href: '/#contact', isHash: true },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-container">
        <Link to="/#home" className="logo-link">
          {/* Logo uploaded by user */}
          <img src="/images/logo.png" alt="ZENOS" className="nav-logo" onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150x50?text=ZENOS+LOGO'; }} />
        </Link>

        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.href} className={`nav-link ${location.pathname === link.href.split('#')[0] && (location.hash === '#' + link.href.split('#')[1] || (!location.hash && !link.href.includes('#'))) ? 'active' : ''}`}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button onClick={() => window.dispatchEvent(new Event('openMembershipModal'))} className="btn-primary join-btn">Join Now</button>
          
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
              <Link to={link.href} onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}
          <li>
             <button 
               className="btn-primary" 
               onClick={() => {
                 setMobileMenuOpen(false);
                 window.dispatchEvent(new Event('openMembershipModal'));
               }}
             >
               Join Now
             </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
