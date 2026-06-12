import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowLeft, CreditCard } from 'lucide-react';
import './Modals.css';

const MembershipModal = ({ isOpen, onClose, selectedPlan }) => {
  const [step, setStep] = useState('billing'); // 'billing' or 'payment'
  const [selectedCycle, setSelectedCycle] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (selectedPlan) {
        setStep('payment');
        const basePrice = parseInt(selectedPlan.price.replace(/[^\d]/g, ''));
        setSelectedCycle({ price: basePrice, label: 'Monthly', suffix: '/mo' });
      } else {
        setStep('billing'); // reset step on open
        setSelectedCycle(null);
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, selectedPlan]);

  if (!isOpen) return null;

  const planName = selectedPlan ? selectedPlan.name : 'Starter';
  const basePrice = selectedPlan ? parseInt(selectedPlan.price.replace(/[^\d]/g, '')) : 2999;
  
  const formatPrice = (price) => new Intl.NumberFormat('en-IN').format(price);

  const cycles = {
    Monthly: { price: basePrice, label: 'Monthly', suffix: '/mo' },
    Quarterly: { price: Math.round(basePrice * 3 * 0.90), label: 'Quarterly', suffix: '/3mo' },
    HalfYearly: { price: Math.round(basePrice * 6 * 0.85), label: 'Half-Yearly', suffix: '/6mo' },
    Yearly: { price: Math.round(basePrice * 12 * 0.75), label: 'Yearly', suffix: '/yr' }
  };

  const handleSelectCycle = (cycleKey) => {
    setSelectedCycle(cycles[cycleKey]);
    setStep('payment');
  };

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="modal-content membership-modal"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
          
          {step === 'billing' ? (
            <>
              <div className="modal-header">
                <h2>{planName.toUpperCase()} BILLING CYCLE</h2>
                <p>Select the billing cycle for your {planName} plan. Upgrade anytime.</p>
              </div>

              <div className="modal-body">
                <div className="plan-options">
                  <div className="plan-option">
                    <div className="plan-info">
                      <h3>Monthly</h3>
                      <div className="plan-price">₹{formatPrice(cycles.Monthly.price)}<span>{cycles.Monthly.suffix}</span></div>
                    </div>
                    <button className="btn-outline" onClick={() => handleSelectCycle('Monthly')}>Select</button>
                  </div>

                  <div className="plan-option recommended">
                    <div className="plan-info">
                      <h3>Quarterly <div className="save-badge">Save 10%</div></h3>
                      <div className="plan-price">₹{formatPrice(cycles.Quarterly.price)}<span>{cycles.Quarterly.suffix}</span></div>
                    </div>
                    <button className="btn-primary" onClick={() => handleSelectCycle('Quarterly')}>Select</button>
                  </div>

                  <div className="plan-option">
                    <div className="plan-info">
                      <h3>Half-Yearly <div className="save-badge">Save 15%</div></h3>
                      <div className="plan-price">₹{formatPrice(cycles.HalfYearly.price)}<span>{cycles.HalfYearly.suffix}</span></div>
                    </div>
                    <button className="btn-outline" onClick={() => handleSelectCycle('HalfYearly')}>Select</button>
                  </div>

                  <div className="plan-option premium">
                    <div className="plan-info">
                      <h3>Yearly <div className="save-badge">Save 25%</div></h3>
                      <div className="plan-price">₹{formatPrice(cycles.Yearly.price)}<span>{cycles.Yearly.suffix}</span></div>
                    </div>
                    <button className="btn-primary" style={{backgroundColor: '#e50914', borderColor: '#e50914'}} onClick={() => handleSelectCycle('Yearly')}>Select</button>
                  </div>
                </div>
                
                <div className="modal-features mt-6 text-sm text-light-gray">
                  <h4 className="font-bold text-white mb-2">All plans include:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    <li className="flex items-center"><Check size={16} className="text-primary mr-2"/> 24/7 Access</li>
                    <li className="flex items-center"><Check size={16} className="text-primary mr-2"/> Free Group Classes</li>
                    <li className="flex items-center"><Check size={16} className="text-primary mr-2"/> Diet Consultation</li>
                    <li className="flex items-center"><Check size={16} className="text-primary mr-2"/> Locker facility</li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="modal-header border-b border-gray-800 pb-4 flex items-center pt-8 px-8">
                <button onClick={() => setStep('billing')} className="text-light-gray hover:text-white transition-colors mr-4">
                  <ArrowLeft size={24} />
                </button>
                <div className="text-left">
                  <h2 className="text-2xl font-bold m-0">SECURE PAYMENT</h2>
                  <p className="text-sm text-light-gray mt-1">Complete your {planName} ({selectedCycle?.label}) subscription</p>
                </div>
              </div>

              <div className="modal-body">
                <div className="bg-gray-900/50 rounded-xl p-4 mb-6 border border-gray-800 flex justify-between items-center">
                  <div>
                    <div className="text-sm text-light-gray">Total Due Today</div>
                    <div className="text-2xl font-bold text-primary">₹{selectedCycle ? formatPrice(selectedCycle.price) : '0'}</div>
                  </div>
                  <CreditCard size={32} className="text-gray-500" />
                </div>

                <form className="trial-form" onSubmit={(e) => { e.preventDefault(); alert('Payment Successful! Welcome to ZENOS.'); onClose(); }}>
                  <div className="input-group">
                    <label>Name on Card</label>
                    <input type="text" required placeholder="John Doe" />
                  </div>
                  <div className="input-group">
                    <label>Card Number</label>
                    <input type="text" required placeholder="0000 0000 0000 0000" maxLength="19" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="input-group">
                      <label>Expiry Date</label>
                      <input type="text" required placeholder="MM/YY" maxLength="5" />
                    </div>
                    <div className="input-group">
                      <label>CVV</label>
                      <input type="text" required placeholder="123" maxLength="3" />
                    </div>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full mt-4 flex justify-center items-center">
                    Pay ₹{selectedCycle ? formatPrice(selectedCycle.price) : '0'}
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-4">
                    Guaranteed safe and secure checkout. By clicking "Pay", you agree to our Terms of Service.
                  </p>
                </form>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default MembershipModal;
