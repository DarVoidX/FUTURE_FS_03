import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import './Modals.css';

const FreeTrialModal = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', date: '', time: '', goal: 'General Fitness'
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', date: '', time: '', goal: 'General Fitness' });
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="modal-content trial-modal"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
          
          {isSubmitted ? (
            <div className="success-state text-center py-10">
              <motion.div 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                className="inline-flex justify-center items-center w-20 h-20 bg-green-500/20 rounded-full mb-6 text-green-500"
              >
                <CheckCircle size={40} />
              </motion.div>
              <h2 className="text-3xl font-bold mb-4">Trial Booked!</h2>
              <p className="text-light-gray mb-8">
                Thank you, {formData.name}. We've received your request for {formData.date} at {formData.time}. Our team will contact you shortly to confirm.
              </p>
              <button className="btn-primary w-full" onClick={onClose}>Close</button>
            </div>
          ) : (
            <>
              <div className="modal-header">
                <h2>Book <span className="text-primary">Free Trial</span></h2>
                <p>Experience our premium facilities before you commit.</p>
              </div>

              <div className="modal-body">
                <form onSubmit={handleSubmit} className="trial-form">
                  <div className="input-group">
                    <label>Full Name</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Arjun Sharma" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="input-group">
                      <label>Phone Number</label>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+91" />
                    </div>
                    <div className="input-group">
                      <label>Email Address</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="arjun@example.com" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="input-group">
                      <label>Preferred Date</label>
                      <input type="date" name="date" required value={formData.date} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                      <label>Preferred Time</label>
                      <input type="time" name="time" required value={formData.time} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="input-group">
                    <label>Fitness Goal</label>
                    <select name="goal" required value={formData.goal} onChange={handleChange}>
                      <option value="Weight Loss">Weight Loss</option>
                      <option value="Muscle Gain">Muscle Gain</option>
                      <option value="Strength">Strength</option>
                      <option value="General Fitness">General Fitness</option>
                    </select>
                  </div>

                  <button type="submit" className="btn-primary w-full mt-4">Book My Trial</button>
                </form>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default FreeTrialModal;
