import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Trainers.css';

const Trainers = () => {
  const trainers = [
    {
      name: "Vikram Singh",
      specialty: "Head Coach & Strength Expert",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Neha Patel",
      specialty: "Functional & HIIT Trainer",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Rajesh Kumar",
      specialty: "Hypertrophy Specialist",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Priya Desai",
      specialty: "Nutrition & Wellness Coach",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <section id="trainers" className="trainers-section bg-jet">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            ELITE <span className="text-red">TRAINERS</span>
          </h2>
          <p className="section-subtitle">
            Train with India's most qualified and experienced fitness professionals dedicated to your success.
          </p>
        </motion.div>

        <div className="trainers-grid">
          {trainers.map((trainer, idx) => (
            <motion.div 
              key={idx} 
              className="trainer-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="trainer-image-container">
                <img src={trainer.image} alt={trainer.name} className="trainer-image" />
                <div className="trainer-overlay">
                  <div className="social-links">
                    <a href="#"><FaInstagram size={20} /></a>
                    <a href="#"><FaTwitter size={20} /></a>
                    <a href="#"><FaLinkedin size={20} /></a>
                  </div>
                </div>
              </div>
              <div className="trainer-info">
                <h3>{trainer.name}</h3>
                <p className="text-red">{trainer.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
