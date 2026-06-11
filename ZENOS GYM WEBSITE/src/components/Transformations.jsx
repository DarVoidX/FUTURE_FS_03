import React from 'react';
import { motion } from 'framer-motion';
import './Transformations.css';

const Transformations = () => {
  const transformations = [
    {
      name: "Rahul Sharma",
      beforeImg: "/images/transformation_before.png",
      afterImg: "/images/transformation_after.png",
      stats: {
        weightLost: "15 kg",
        muscleGain: "4 kg",
        time: "6 Months"
      },
      quote: "ZENOS completely changed my approach to fitness. The trainers are elite."
    },
    {
      name: "Arjun Verma",
      beforeImg: "/images/arjun_before.png", 
      afterImg: "/images/arjun_after.png",
      stats: {
        weightLost: "8 kg",
        muscleGain: "6 kg",
        time: "4 Months"
      },
      quote: "The personalized coaching and elite equipment made all the difference."
    },
    {
      name: "Kiran Gowda",
      beforeImg: "/images/kiran_before.png",
      afterImg: "/images/kiran_after.png",
      stats: {
        weightLost: "20 kg",
        muscleGain: "3 kg",
        time: "8 Months"
      },
      quote: "A true transformation of both body and mind. Best facility in India."
    }
  ];

  return (
    <section id="transformation" className="transformations-section bg-matte">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            REAL <span className="text-red">TRANSFORMATIONS</span>
          </h2>
          <p className="section-subtitle">
            Witness the incredible journeys of our members who pushed past their limits to achieve the ultimate physique.
          </p>
        </motion.div>

        <div className="transformations-grid">
          {transformations.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="transform-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="transform-images">
                <div className="img-container before">
                  <span className="label">BEFORE</span>
                  <img src={item.beforeImg} alt={`${item.name} Before`} />
                </div>
                <div className="img-container after">
                  <span className="label">AFTER</span>
                  <img src={item.afterImg} alt={`${item.name} After`} />
                </div>
              </div>
              
              <div className="transform-content glass">
                <h3>{item.name}</h3>
                <p className="quote">"{item.quote}"</p>
                
                <div className="transform-stats">
                  <div className="t-stat">
                    <span>Lost</span>
                    <strong>{item.stats.weightLost}</strong>
                  </div>
                  <div className="t-stat">
                    <span>Gained</span>
                    <strong>{item.stats.muscleGain}</strong>
                  </div>
                  <div className="t-stat">
                    <span>Time</span>
                    <strong>{item.stats.time}</strong>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformations;
