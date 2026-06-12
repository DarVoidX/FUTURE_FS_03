import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Nutrition.css';

const nutritionPlans = [
  {
    id: 'teenagers',
    title: 'Teenagers',
    age: '13-18',
    description: 'Fuel your growth spurts with protein-rich balanced meals tailored for active teens.',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'young-adults',
    title: 'Young Adults',
    age: '19-30',
    description: 'High-energy Indian meals to build muscle, manage weight, and maintain peak performance.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'adults',
    title: 'Adults',
    age: '31-45',
    description: 'Metabolism-boosting diet plans combating stress and busy lifestyle challenges.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'middle-age',
    title: 'Middle Age',
    age: '46-60',
    description: 'Heart-healthy, low-cholesterol Indian cuisine to sustain muscle mass and joint health.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'senior',
    title: 'Senior Citizens',
    age: '60+',
    description: 'Specialized high-fiber, easily digestible meals focusing on bone density and longevity.',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=600',
  }
];

const Nutrition = () => {
  return (
    <div className="nutrition-page pt-24 pb-16 bg-black min-h-screen text-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 mt-8"
        >
          <h1 className="section-title">
            <span className="text-primary">NUTRITION</span> & DIET PLANS
          </h1>
          <p className="section-subtitle">
            Scientifically designed Indian nutrition plans tailored to your age, lifestyle, and fitness goals.
          </p>
        </motion.div>

        <div className="nutrition-grid">
          {nutritionPlans.map((plan, index) => (
            <motion.div 
              key={plan.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="nutrition-card"
            >
              <div className="circular-image-wrapper">
                <img src={plan.image} alt={plan.title} className="circular-image" />
                <div className="age-badge">{plan.age}</div>
              </div>
              <h3 className="plan-title">{plan.title}</h3>
              <p className="plan-description">{plan.description}</p>
              <Link to={`/nutrition/${plan.id}`} className="btn-primary view-plan-btn">
                View Plan
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
