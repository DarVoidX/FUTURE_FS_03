import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import './Modals.css';

const ProgramModal = ({ isOpen, onClose, program }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !program) return null;

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose} style={{ zIndex: 9999 }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="modal-content program-modal"
          onClick={(e) => e.stopPropagation()}
          style={{ background: '#0a0a0a' }}
        >
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
          
          <div className="modal-header">
            <div className="inline-flex justify-center items-center w-16 h-16 bg-red-900/20 text-primary rounded-full mb-4">
              {program.icon}
            </div>
            <h2>{program.title}</h2>
            <p>{program.desc}</p>
          </div>

          <div className="modal-body text-left">
            <h3 className="text-xl font-bold mb-4 text-white">What You'll Experience</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-light-gray">Comprehensive 12-week structured curriculum.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-light-gray">Customized approach to match your baseline fitness level.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-light-gray">Expert guidance from our certified elite trainers.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-light-gray">Weekly progress tracking and milestone adjustments.</span>
              </li>
            </ul>

            <button 
              className="btn-primary w-full py-3" 
              onClick={() => {
                onClose();
                window.dispatchEvent(new Event('openFreeTrialModal'));
              }}
            >
              Book Free Trial for this Program
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProgramModal;
