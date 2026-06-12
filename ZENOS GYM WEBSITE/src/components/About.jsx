import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './About.css';

const About = () => {
  const [showStats, setShowStats] = useState(false);
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
              Pioneering Bangalore fitness culture, ZENOS Fitness Club is a modern Indian fitness destination focused on Strength + Wellness, Functional Fitness, and aesthetics. Pair your training with our custom Indian diet plans featuring authentic Indian meals to achieve your ultimate physique.
            </p>
            
            <ul className="features-list">
              {features.map((feature, idx) => (
                <li key={idx}>
                  <CheckCircle className="text-red" size={24} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="btn-primary mt-4" onClick={() => setShowStats(!showStats)}>
              {showStats ? "Show Less" : "Discover More"}
            </button>

            <AnimatePresence>
              {showStats && (
                <motion.div 
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  className="grid grid-cols-3 gap-4 text-center overflow-hidden"
                >
                  <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-800">
                    <h4 className="text-red font-bold text-2xl">98%</h4>
                    <p className="text-xs text-light-gray uppercase tracking-wider mt-1">Success Rate</p>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-800">
                    <h4 className="text-white font-bold text-2xl">5000+</h4>
                    <p className="text-xs text-light-gray uppercase tracking-wider mt-1">Members</p>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-800">
                    <h4 className="text-white font-bold text-2xl">20+</h4>
                    <p className="text-xs text-light-gray uppercase tracking-wider mt-1">Programs</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
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
