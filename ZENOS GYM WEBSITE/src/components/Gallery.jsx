import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1596357395217-80de13130e92?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop"
  ];

  return (
    <section id="gallery" className="gallery-section bg-jet">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            THE <span className="text-red">FACILITY</span>
          </h2>
          <p className="section-subtitle">
            Step inside our world-class, 10,000 sq.ft facility equipped with the finest machinery.
          </p>
        </motion.div>

        <div className="masonry-gallery">
          {images.map((src, idx) => (
            <motion.div 
              key={idx}
              className={`gallery-item item-${idx + 1}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <img src={src} alt={`Facility view ${idx + 1}`} />
              <div className="gallery-overlay">
                <span className="view-text">VIEW</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
