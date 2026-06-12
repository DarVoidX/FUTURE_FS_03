import React from 'react';
import { motion } from 'framer-motion';
import HeroBackground from './HeroBackground';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <HeroBackground />
      
      <div className="container hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-badge"
          >
            INDIA'S NEXT GENERATION FITNESS CLUB
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-title"
          >
            FORGE <br/>
            YOUR <br/>
            <span className="text-red">ULTIMATE</span> <br/>
            PHYSIQUE
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-subtitle"
          >
            Premium training programs, expert coaching, advanced equipment and a community built to transform your body and mindset.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-buttons"
          >
            <button className="btn-primary" onClick={() => window.dispatchEvent(new Event('openMembershipModal'))}>Start Transformation</button>
            <button className="btn-outline" onClick={() => window.dispatchEvent(new Event('openFreeTrialModal'))}>Book Free Trial</button>
          </motion.div>
        </div>

        <div className="hero-visuals">
          {/* Floating Stats Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="stat-card stat-members glass"
          >
            <h4>5000+</h4>
            <p>Members</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="stat-card stat-programs glass"
          >
            <h4>20+</h4>
            <p>Programs</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="stat-card stat-success glass"
          >
            <h4>98%</h4>
            <p>Success Rate</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
