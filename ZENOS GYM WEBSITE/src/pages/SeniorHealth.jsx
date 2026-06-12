import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Activity, Leaf, Heart, Sun, Accessibility } from 'lucide-react';
import './NutritionDetails.css'; // Reusing some CSS
import './SeniorHealth.css';

const SeniorHealth = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="senior-health-page pt-24 pb-16 bg-black min-h-screen text-white">
      <div className="container">
        <Link to="/nutrition" className="back-link mb-8 inline-flex items-center text-light-gray hover:text-primary transition-colors">
          <ArrowLeft size={20} className="mr-2" /> Back to All Plans
        </Link>
        
        <div className="text-center mb-16">
          <h1 className="section-title">
            <span className="text-primary">SENIOR</span> HEALTH & WELLNESS
          </h1>
          <p className="section-subtitle">
            A comprehensive guide tailored for our 60+ members focusing on longevity, mobility, and vitality.
          </p>
        </div>

        <div className="senior-grid">
          {/* Daily Routine Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="senior-card routine-card"
          >
            <div className="card-header border-b border-gray-800 pb-4 mb-6 flex items-center">
              <Sun className="text-yellow-500 mr-3" size={32} />
              <h2 className="text-2xl font-bold">Daily Routine</h2>
            </div>
            <ul className="routine-list">
              <li>
                <Activity className="icon text-primary" size={24} />
                <div>
                  <h4 className="font-bold">Morning Walk</h4>
                  <p className="text-light-gray text-sm">30-40 minutes of brisk walking in nature or on a low-impact treadmill.</p>
                </div>
              </li>
              <li>
                <Accessibility className="icon text-green-500" size={24} />
                <div>
                  <h4 className="font-bold">Yoga</h4>
                  <p className="text-light-gray text-sm">Gentle asanas to improve flexibility, balance, and core strength.</p>
                </div>
              </li>
              <li>
                <Leaf className="icon text-blue-400" size={24} />
                <div>
                  <h4 className="font-bold">Breathing Exercises</h4>
                  <p className="text-light-gray text-sm">Pranayama / Deep breathing to enhance lung capacity and reduce stress.</p>
                </div>
              </li>
              <li>
                <Heart className="icon text-primary" size={24} />
                <div>
                  <h4 className="font-bold">Mobility Training</h4>
                  <p className="text-light-gray text-sm">Joint rotations and light resistance band exercises to prevent stiffness.</p>
                </div>
              </li>
              <li>
                <Accessibility className="icon text-orange-400" size={24} />
                <div>
                  <h4 className="font-bold">Stretching</h4>
                  <p className="text-light-gray text-sm">Post-workout static stretching targeting lower back, hips, and shoulders.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Foods Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="senior-card foods-card"
          >
            <div className="card-header border-b border-gray-800 pb-4 mb-6 flex items-center">
              <Leaf className="text-green-500 mr-3" size={32} />
              <h2 className="text-2xl font-bold">Recommended Foods</h2>
            </div>
            
            <div className="foods-grid">
              <div className="food-item">
                <div className="food-icon bg-green-900/40 text-green-400">🥗</div>
                <h4 className="font-bold">High Fiber Diet</h4>
                <p className="text-light-gray text-sm text-center">Oats, broken wheat (daliya), and millets for digestion.</p>
              </div>
              <div className="food-item">
                <div className="food-icon bg-orange-900/40 text-orange-400">🍎</div>
                <h4 className="font-bold">Fresh Fruits</h4>
                <p className="text-light-gray text-sm text-center">Papaya, apples, and bananas for natural vitamins.</p>
              </div>
              <div className="food-item">
                <div className="food-icon bg-green-900/40 text-green-500">🥦</div>
                <h4 className="font-bold">Green Vegetables</h4>
                <p className="text-light-gray text-sm text-center">Spinach, bottle gourd (lauki), and beans for micronutrients.</p>
              </div>
              <div className="food-item">
                <div className="food-icon bg-yellow-900/40 text-yellow-400">🥚</div>
                <h4 className="font-bold">Protein Rich Foods</h4>
                <p className="text-light-gray text-sm text-center">Dal, paneer, eggs, and soft boiled chicken for muscle retention.</p>
              </div>
            </div>

            <div className="health-tips mt-8 p-6 bg-red-900/20 border border-red-500/20 rounded-xl">
              <h3 className="font-bold text-xl mb-3 flex items-center text-primary">
                <Heart size={20} className="mr-2" /> Essential Health Tips
              </h3>
              <ul className="list-disc list-inside text-light-gray space-y-2 text-sm">
                <li>Stay hydrated! Drink at least 2.5 liters of water daily.</li>
                <li>Avoid heavy meals before bedtime. Eat dinner by 7:30 PM.</li>
                <li>Include calcium-rich foods like milk or curd to support bone health.</li>
                <li>Ensure adequate Vitamin D through early morning sunlight exposure.</li>
                <li>Chew food thoroughly to aid digestion.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SeniorHealth;
