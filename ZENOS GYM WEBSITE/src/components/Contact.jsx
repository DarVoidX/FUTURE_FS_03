import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-info"
          >
            <h2 className="section-title text-left" style={{ marginBottom: '10px' }}>
              JOIN THE <span className="text-red">ELITE</span>
            </h2>
            <p className="contact-subtitle">
              Ready to forge your ultimate physique? Reach out to us today and let's begin your transformation journey.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="icon-box">
                  <Phone size={24} className="text-red" />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 7892611628</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-box">
                  <MessageCircle size={24} className="text-red" />
                </div>
                <div>
                  <h4>WhatsApp</h4>
                  <p>+91 7892611628</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-box">
                  <Mail size={24} className="text-red" />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>join@zenosfitness.in</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-box">
                  <MapPin size={24} className="text-red" />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>123 Premium Avenue, Chikmagalur, Karnataka, India</p>
                </div>
              </div>
            </div>

            <div className="cta-wrapper">
              <h3 className="large-cta">START YOUR FITNESS JOURNEY TODAY</h3>
              <button className="btn-primary" onClick={() => window.dispatchEvent(new Event('openFreeTrialModal'))}>Get Your Free Pass</button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contact-image-wrapper"
          >
            <div className="location-image-container glass">
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" alt="ZENOS Gym Location" className="location-image" />
              <div className="location-overlay">
                <a href="https://maps.google.com/?q=Chikmagalur+Karnataka" target="_blank" rel="noreferrer" className="btn-primary flex items-center justify-center">
                  <MapPin size={20} className="mr-2" /> Get Directions
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Embedded Google Maps */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="map-container mt-16"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.275880790929!2d75.765611!3d13.315309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbad77a33994ab3%3A0x6b772bd2c668b7!2sChikkamagaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0, borderRadius: '20px', filter: 'grayscale(100%) invert(90%) contrast(1.2)' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="ZENOS Gym Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
