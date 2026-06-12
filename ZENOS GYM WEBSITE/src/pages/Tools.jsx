import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Calculator, Dumbbell, Droplets, Target } from 'lucide-react';
import './Tools.css';

const tabs = [
  { id: 'bmi', label: 'BMI', icon: <Activity size={20} /> },
  { id: 'tdee', label: 'TDEE', icon: <Calculator size={20} /> },
  { id: 'bodyfat', label: 'Body Fat %', icon: <Droplets size={20} /> },
  { id: 'onerep', label: '1RM Max', icon: <Dumbbell size={20} /> },
  { id: 'plates', label: 'Plate Calc', icon: <Target size={20} /> },
];

const Tools = () => {
  const [activeTab, setActiveTab] = useState('bmi');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tools-page pt-24 pb-16 bg-black min-h-screen text-white">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="section-title">
            FITNESS <span className="text-primary">TOOLS</span>
          </h1>
          <p className="section-subtitle">
            Premium calculators to track and optimize your fitness journey.
          </p>
        </div>

        <div className="dashboard-container">
          <div className="tabs-sidebar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="tab-content glass-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="calculator-wrapper"
              >
                {activeTab === 'bmi' && <BMICalculator />}
                {activeTab === 'tdee' && <TDEECalculator />}
                {activeTab === 'bodyfat' && <BodyFatCalculator />}
                {activeTab === 'onerep' && <OneRepMaxCalculator />}
                {activeTab === 'plates' && <PlateCalculator />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Calculators ---

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const hInMeters = parseFloat(height) / 100;
      const bmi = (parseFloat(weight) / (hInMeters * hInMeters)).toFixed(1);
      let category = '';
      if (bmi < 18.5) category = 'Underweight';
      else if (bmi < 24.9) category = 'Normal Weight';
      else if (bmi < 29.9) category = 'Overweight';
      else category = 'Obese';
      setResult({ bmi, category });
    }
  };

  return (
    <div className="calculator">
      <h2>BMI Calculator</h2>
      <p className="text-light-gray mb-6 text-sm">Calculate your Body Mass Index to see if you're at a healthy weight.</p>
      <form onSubmit={calculateBMI} className="calc-form">
        <div className="input-group">
          <label>Height (cm)</label>
          <input type="number" value={height} onChange={e => setHeight(e.target.value)} required placeholder="e.g. 175" />
        </div>
        <div className="input-group">
          <label>Weight (kg)</label>
          <input type="number" value={weight} onChange={e => setWeight(e.target.value)} required placeholder="e.g. 70" />
        </div>
        <button type="submit" className="btn-primary w-full mt-4">Calculate</button>
      </form>
      
      {result && (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="result-box mt-6 text-center p-6 border border-gray-800 rounded-xl bg-gray-900/50">
          <div className="text-5xl font-bold text-primary mb-2">{result.bmi}</div>
          <div className="text-xl">{result.category}</div>
        </motion.div>
      )}

      <div className="mt-8 text-sm text-gray-400 border-t border-gray-800 pt-4">
        <p><strong className="text-white">Example:</strong> Height 175 cm, Weight 70 kg &rarr; BMI 22.9 (Normal Weight)</p>
      </div>
    </div>
  );
};

const TDEECalculator = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState('1.2');
  const [result, setResult] = useState(null);

  const calculateTDEE = (e) => {
    e.preventDefault();
    if (age && height && weight) {
      let bmr = 0;
      if (gender === 'male') {
        bmr = 10 * parseFloat(weight) + 6.25 * parseFloat(height) - 5 * parseFloat(age) + 5;
      } else {
        bmr = 10 * parseFloat(weight) + 6.25 * parseFloat(height) - 5 * parseFloat(age) - 161;
      }
      const tdee = Math.round(bmr * parseFloat(activity));
      const protein = Math.round((tdee * 0.3) / 4);
      const fat = Math.round((tdee * 0.25) / 9);
      const carbs = Math.round((tdee * 0.45) / 4);
      setResult({ calories: tdee, protein, fat, carbs });
    }
  };

  return (
    <div className="calculator">
      <h2>TDEE & Macros Calculator</h2>
      <p className="text-light-gray mb-6 text-sm">Total Daily Energy Expenditure to find your maintenance calories and macros.</p>
      <form onSubmit={calculateTDEE} className="calc-form">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="input-group">
            <label>Age</label>
            <input type="number" value={age} onChange={e => setAge(e.target.value)} required />
          </div>
          <div className="input-group">
            <label>Gender</label>
            <select value={gender} onChange={e => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="input-group">
            <label>Height (cm)</label>
            <input type="number" value={height} onChange={e => setHeight(e.target.value)} required />
          </div>
          <div className="input-group">
            <label>Weight (kg)</label>
            <input type="number" value={weight} onChange={e => setWeight(e.target.value)} required />
          </div>
        </div>
        <div className="input-group mb-4">
          <label>Activity Level</label>
          <select value={activity} onChange={e => setActivity(e.target.value)}>
            <option value="1.2">Sedentary (Little/No exercise)</option>
            <option value="1.375">Light (1-3 days/week)</option>
            <option value="1.55">Moderate (3-5 days/week)</option>
            <option value="1.725">Active (6-7 days/week)</option>
            <option value="1.9">Very Active (Physical job/training 2x a day)</option>
          </select>
        </div>
        <button type="submit" className="btn-primary w-full">Calculate</button>
      </form>
      
      {result && (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="result-box mt-6 grid grid-cols-2 gap-4">
          <div className="col-span-2 text-center p-4 border border-gray-800 rounded-xl bg-gray-900/50">
            <div className="text-sm text-light-gray">Maintenance Calories</div>
            <div className="text-3xl font-bold text-primary">{result.calories} kcal</div>
          </div>
          <div className="text-center p-3 border border-gray-800 rounded-xl">
            <div className="text-xs text-light-gray">Protein</div>
            <div className="font-bold">{result.protein}g</div>
          </div>
          <div className="text-center p-3 border border-gray-800 rounded-xl">
            <div className="text-xs text-light-gray">Carbs</div>
            <div className="font-bold">{result.carbs}g</div>
          </div>
          <div className="col-span-2 text-center p-3 border border-gray-800 rounded-xl">
            <div className="text-xs text-light-gray">Fat</div>
            <div className="font-bold">{result.fat}g</div>
          </div>
        </motion.div>
      )}

      <div className="mt-8 text-sm text-gray-400 border-t border-gray-800 pt-4">
        <p><strong className="text-white">Example:</strong> 25yo Male, 175cm, 70kg, Active &rarr; ~2800 kcal/day</p>
      </div>
    </div>
  );
};

const BodyFatCalculator = () => {
  const [gender, setGender] = useState('male');
  const [waist, setWaist] = useState('');
  const [neck, setNeck] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateBodyFat = (e) => {
    e.preventDefault();
    if (waist && neck && height) {
      // US Navy Method simplified for metric
      const w = parseFloat(waist);
      const n = parseFloat(neck);
      const h = parseFloat(height);
      let bf = 0;
      if (gender === 'male') {
        bf = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
      } else {
        bf = 495 / (1.29579 - 0.35004 * Math.log10(w + w - n) + 0.22100 * Math.log10(h)) - 450; // Approximated
        // Note: For females, hip measurement is typically required. We will use a simplified formula for demo.
      }
      setResult(bf > 0 && bf < 60 ? bf.toFixed(1) : 'Invalid inputs');
    }
  };

  return (
    <div className="calculator">
      <h2>Body Fat Calculator (US Navy Method)</h2>
      <p className="text-light-gray mb-6 text-sm">Estimate your body fat percentage using tape measurements.</p>
      <form onSubmit={calculateBodyFat} className="calc-form">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="input-group col-span-2">
            <label>Gender</label>
            <select value={gender} onChange={e => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="input-group">
            <label>Waist (cm) at navel</label>
            <input type="number" value={waist} onChange={e => setWaist(e.target.value)} required />
          </div>
          <div className="input-group">
            <label>Neck (cm) at narrowest</label>
            <input type="number" value={neck} onChange={e => setNeck(e.target.value)} required />
          </div>
          <div className="input-group col-span-2">
            <label>Height (cm)</label>
            <input type="number" value={height} onChange={e => setHeight(e.target.value)} required />
          </div>
        </div>
        <button type="submit" className="btn-primary w-full">Calculate</button>
      </form>
      
      {result && (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="result-box mt-6 text-center p-6 border border-gray-800 rounded-xl bg-gray-900/50">
          <div className="text-4xl font-bold text-primary mb-2">{result}{result !== 'Invalid inputs' && '%'}</div>
          <div className="text-sm text-light-gray">Estimated Body Fat</div>
        </motion.div>
      )}

      <div className="mt-8 text-sm text-gray-400 border-t border-gray-800 pt-4">
        <p><strong className="text-white">Example:</strong> Male, Waist 85cm, Neck 38cm, Height 175cm &rarr; ~15% Body Fat</p>
      </div>
    </div>
  );
};

const OneRepMaxCalculator = () => {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [result, setResult] = useState(null);

  const calculate1RM = (e) => {
    e.preventDefault();
    if (weight && reps) {
      const w = parseFloat(weight);
      const r = parseInt(reps);
      // Brzycki formula
      const rm = w * (36 / (37 - r));
      setResult(Math.round(rm));
    }
  };

  return (
    <div className="calculator">
      <h2>One Rep Max Calculator</h2>
      <p className="text-light-gray mb-6 text-sm">Estimate your 1RM safely without lifting maximal loads.</p>
      <form onSubmit={calculate1RM} className="calc-form">
        <div className="input-group mb-4">
          <label>Weight Lifted (kg)</label>
          <input type="number" value={weight} onChange={e => setWeight(e.target.value)} required placeholder="e.g. 100" />
        </div>
        <div className="input-group mb-4">
          <label>Reps Completed</label>
          <input type="number" value={reps} onChange={e => setReps(e.target.value)} required max="12" placeholder="e.g. 5 (max 12 for accuracy)" />
        </div>
        <button type="submit" className="btn-primary w-full">Calculate 1RM</button>
      </form>
      
      {result && (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="result-box mt-6 text-center p-6 border border-gray-800 rounded-xl bg-gray-900/50">
          <div className="text-5xl font-bold text-primary mb-2">{result} kg</div>
          <div className="text-sm text-light-gray">Estimated 1RM</div>
        </motion.div>
      )}

      <div className="mt-8 text-sm text-gray-400 border-t border-gray-800 pt-4">
        <p><strong className="text-white">Example:</strong> Lifted 100 kg for 5 reps &rarr; Estimated 1RM of 113 kg</p>
      </div>
    </div>
  );
};

const PlateCalculator = () => {
  const [targetWeight, setTargetWeight] = useState('');
  const [barWeight, setBarWeight] = useState('20');
  const [result, setResult] = useState(null);

  const calculatePlates = (e) => {
    e.preventDefault();
    const target = parseFloat(targetWeight);
    const bar = parseFloat(barWeight);
    
    if (target < bar) {
      setResult({ error: "Target weight must be greater than bar weight." });
      return;
    }
    
    let weightPerSide = (target - bar) / 2;
    const availablePlates = [25, 20, 15, 10, 5, 2.5, 1.25];
    const platesToUse = [];
    
    for (let plate of availablePlates) {
      while (weightPerSide >= plate) {
        platesToUse.push(plate);
        weightPerSide -= plate;
      }
    }
    
    if (weightPerSide > 0.1) {
      setResult({ error: `Cannot make exactly ${target}kg. Closest match shown.`, plates: platesToUse });
    } else {
      setResult({ plates: platesToUse });
    }
  };

  return (
    <div className="calculator">
      <h2>Plate Calculator</h2>
      <p className="text-light-gray mb-6 text-sm">Find out exactly which plates to load on each side of the bar.</p>
      <form onSubmit={calculatePlates} className="calc-form">
        <div className="input-group mb-4">
          <label>Target Total Weight (kg)</label>
          <input type="number" value={targetWeight} onChange={e => setTargetWeight(e.target.value)} required placeholder="e.g. 140" />
        </div>
        <div className="input-group mb-4">
          <label>Barbell Weight (kg)</label>
          <select value={barWeight} onChange={e => setBarWeight(e.target.value)}>
            <option value="20">Standard Olympic (20kg)</option>
            <option value="15">Women's Olympic (15kg)</option>
            <option value="10">Training Bar (10kg)</option>
          </select>
        </div>
        <button type="submit" className="btn-primary w-full">Calculate Plates</button>
      </form>
      
      {result && (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="result-box mt-6 p-4 border border-gray-800 rounded-xl bg-gray-900/50">
          {result.error && <p className="text-orange-500 text-sm mb-3 text-center">{result.error}</p>}
          <div className="text-center font-bold mb-4 border-b border-gray-700 pb-2">Plates per side:</div>
          <div className="flex flex-wrap gap-2 justify-center">
            {result.plates && result.plates.length > 0 ? (
              result.plates.map((p, i) => (
                <div key={i} className="bg-red-600 border-2 border-red-800 text-white font-bold w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
                  {p}
                </div>
              ))
            ) : (
              <div className="text-light-gray">Just the bar!</div>
            )}
          </div>
        </motion.div>
      )}

      <div className="mt-8 text-sm text-gray-400 border-t border-gray-800 pt-4">
        <p><strong className="text-white">Example:</strong> Target 140kg with 20kg Bar &rarr; Load 25kg, 25kg, 10kg on each side</p>
      </div>
    </div>
  );
};

export default Tools;
