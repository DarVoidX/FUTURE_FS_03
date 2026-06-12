import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Flame, Droplets, Utensils, Coffee, Apple, ArrowLeft, Target } from 'lucide-react';
import './NutritionDetails.css';

const dietData = {
  'teenagers': {
    title: 'Teenagers (13-18)',
    calories: '2400 - 2800 kcal',
    protein: '1.2g - 1.5g per kg of body weight',
    water: '2.5 - 3 Liters',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800',
    meals: {
      breakfast: '3 Idlis with Sambar and Coconut Chutney / 2 Paneer Parathas with Curd',
      lunch: '1 bowl Dal, 2 Chapatis, 1 portion green vegetables, Rice, and Salad',
      snacks: 'Handful of roasted Chana, Peanut Chikki, or 1 fresh Fruit',
      dinner: 'Grilled Chicken/Paneer, 2 Chapatis, and mixed veg curry'
    }
  },
  'young-adults': {
    title: 'Young Adults (19-30)',
    calories: '2200 - 2600 kcal',
    protein: '1.6g - 2.0g per kg of body weight',
    water: '3 - 4 Liters',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
    meals: {
      breakfast: 'Oats Chilla / Masala Dosa with protein shake or 3 Whole Eggs',
      lunch: 'Chicken breast/Tofu, Quinoa/Brown Rice, Dal Tadka, and Spinach',
      snacks: 'Protein Bar, Greek Yogurt, or Sprouts chaat',
      dinner: 'Light paneer tikka / Grilled fish with sautéed vegetables'
    }
  },
  'adults': {
    title: 'Adults (31-45)',
    calories: '2000 - 2400 kcal',
    protein: '1.0g - 1.2g per kg of body weight',
    water: '3 Liters',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    meals: {
      breakfast: 'Poha with peanuts / Besan Chilla with mint chutney',
      lunch: '2 Multigrain Chapatis, Rajma/Chole, small portion of Rice, Cucumber salad',
      snacks: 'Makhana (Fox nuts), Green Tea, and Almonds',
      dinner: 'Moong Dal soup, 1 Chapati, and Bottle Gourd (Lauki) sabzi'
    }
  },
  'middle-age': {
    title: 'Middle Age (46-60)',
    calories: '1800 - 2200 kcal',
    protein: '1.0g - 1.2g per kg of body weight',
    water: '2.5 - 3 Liters',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800',
    meals: {
      breakfast: 'Upma with vegetables / Daliya (Broken Wheat) porridge',
      lunch: '1-2 Jowar/Bajra Roti, Yellow Dal, mixed vegetable dry curry, Curd',
      snacks: 'Roasted seeds (Pumpkin/Flax), unsweetened Tea, or Apple',
      dinner: 'Clear vegetable soup, Khichdi with a dollop of Ghee'
    }
  }
};

const NutritionDetails = () => {
  const { ageGroup } = useParams();
  const data = dietData[ageGroup];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) {
    return (
      <div className="pt-32 text-center min-h-screen text-white bg-black">
        <h2>Plan not found.</h2>
        <Link to="/nutrition" className="text-primary mt-4 inline-block">Go Back</Link>
      </div>
    );
  }

  return (
    <div className="nutrition-details-page pt-24 pb-16 bg-black min-h-screen text-white">
      <div className="container">
        <Link to="/nutrition" className="back-link mb-8 inline-flex items-center text-light-gray hover:text-primary transition-colors">
          <ArrowLeft size={20} className="mr-2" /> Back to All Plans
        </Link>
        
        <div className="details-header mb-12">
          <motion.img 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src={data.image} 
            alt={data.title} 
            className="header-image rounded-xl"
          />
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="header-content"
          >
            <h1 className="text-4xl font-bold mb-4">{data.title} <span className="text-primary">Diet Plan</span></h1>
            <p className="text-light-gray mb-8">Follow this customized Indian meal plan to achieve your optimal health and fitness targets.</p>
            
            <div className="stats-grid">
              <div className="stat-card">
                <Flame className="text-primary mb-2" size={32} />
                <div className="stat-label">Daily Calories</div>
                <div className="stat-value">{data.calories}</div>
              </div>
              <div className="stat-card">
                <Target className="text-primary mb-2" size={32} />
                <div className="stat-label">Protein Target</div>
                <div className="stat-value">{data.protein}</div>
              </div>
              <div className="stat-card">
                <Droplets className="text-blue-400 mb-2" size={32} />
                <div className="stat-label">Water Intake</div>
                <div className="stat-value">{data.water}</div>
              </div>
            </div>
          </motion.div>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center border-b border-gray-800 pb-4">Daily <span className="text-primary">Meals</span></h2>

        <div className="meals-grid">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="meal-card"
          >
            <div className="meal-icon-wrapper bg-orange-500/20 text-orange-500">
              <Coffee size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Breakfast</h3>
            <p className="text-light-gray">{data.meals.breakfast}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="meal-card"
          >
            <div className="meal-icon-wrapper bg-green-500/20 text-green-500">
              <Utensils size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Lunch</h3>
            <p className="text-light-gray">{data.meals.lunch}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="meal-card"
          >
            <div className="meal-icon-wrapper bg-yellow-500/20 text-yellow-500">
              <Apple size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Snacks</h3>
            <p className="text-light-gray">{data.meals.snacks}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="meal-card"
          >
            <div className="meal-icon-wrapper bg-blue-500/20 text-blue-500">
              <Utensils size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Dinner</h3>
            <p className="text-light-gray">{data.meals.dinner}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NutritionDetails;
