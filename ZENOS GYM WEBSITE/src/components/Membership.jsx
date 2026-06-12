import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import './Membership.css';

const Membership = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹2,999",
      period: "/month",
      features: ["Access to gym floor", "Basic equipment", "Locker room access", "1 Group class/week"],
      highlight: false
    },
    {
      name: "Elite",
      price: "₹5,999",
      period: "/month",
      features: ["Unlimited gym access", "All premium equipment", "Free fitness assessment", "Unlimited group classes", "Diet consultation"],
      highlight: true
    },
    {
      name: "Pro",
      price: "₹4,499",
      period: "/month",
      features: ["Access to gym floor", "Advanced equipment", "Locker room access", "3 Group classes/week"],
      highlight: false
    }
  ];

  return (
    <section id="membership" className="membership-section bg-matte">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            CHOOSE YOUR <span className="text-red">TIER</span>
          </h2>
          <p className="section-subtitle">
            Flexible membership options tailored to your commitment level. No hidden fees.
          </p>
        </motion.div>

        <div className="pricing-grid">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx} 
              className={`pricing-card ${plan.highlight ? 'highlight glass' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {plan.highlight && <div className="popular-badge">MOST POPULAR</div>}
              
              <div className="pricing-header">
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="amount">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
              </div>
              
              <ul className="pricing-features">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx}>
                    <Check size={20} className={plan.highlight ? 'text-pure-white' : 'text-red'} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`btn-primary ${plan.highlight ? 'btn-white' : ''} w-100`}
                onClick={() => window.dispatchEvent(new CustomEvent('openMembershipModal', { detail: { plan: plan } }))}
              >
                Select {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
