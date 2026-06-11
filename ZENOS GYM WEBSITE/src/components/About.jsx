import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './About.css';

const About = () => {
  const features = [
    "Elite Coaching",
    "Modern Equipment",
    "Nutrition Guidance",
    "Results Driven Programs"
  ];

  return (
    <section id="about" className="about-section bg-matte">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-content"
          >
            <h2 className="section-title text-left">
              WHY <span className="text-red">ZENOS?</span>
            </h2>
            <p className="about-description">
              ZENOS Fitness Club is a modern Indian fitness destination focused on strength, performance, aesthetics, and long-term wellness.
            </p>
            
            <ul className="features-list">
              {features.map((feature, idx) => (
                <li key={idx}>
                  <CheckCircle className="text-red" size={24} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="btn-primary mt-4">Discover More</button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-visuals"
          >
            <div className="about-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
                alt="Gym Interior" 
                className="about-image"
              />
              <div className="about-stats glass">
                <div className="stat">
                  <h3>10k+</h3>
                  <p>Sq.Ft Space</p>
                </div>
                <div className="stat">
                  <h3>24/7</h3>
                  <p>Access</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
