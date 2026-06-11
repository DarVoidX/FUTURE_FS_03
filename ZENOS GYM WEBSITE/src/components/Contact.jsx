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
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-box">
                  <MessageCircle size={24} className="text-red" />
                </div>
                <div>
                  <h4>WhatsApp</h4>
                  <p>+91 98765 43210</p>
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
                  <p>123 Premium Avenue, Kormangala, Bangalore, India</p>
                </div>
              </div>
            </div>

            <div className="cta-wrapper">
              <h3 className="large-cta">START YOUR FITNESS JOURNEY TODAY</h3>
              <button className="btn-primary">Get Your Free Pass</button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contact-map"
          >
            <div className="map-placeholder glass">
              <MapPin size={48} className="text-red mb-4" />
              <h3>Google Maps Integration</h3>
              <p>Location Map goes here</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
