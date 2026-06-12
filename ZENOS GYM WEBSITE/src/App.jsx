import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

import Nutrition from './pages/Nutrition';
import NutritionDetails from './pages/NutritionDetails';
import SeniorHealth from './pages/SeniorHealth';
import Tools from './pages/Tools';

import MembershipModal from './components/MembershipModal';
import FreeTrialModal from './components/FreeTrialModal';

function App() {
  const [isMembershipOpen, setIsMembershipOpen] = useState(false);
  const [membershipPlan, setMembershipPlan] = useState(null);
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleOpenMembership = (e) => {
      if (e.detail && e.detail.plan) {
        setMembershipPlan(e.detail.plan);
      } else {
        setMembershipPlan(null); // default
      }
      setIsMembershipOpen(true);
    };
    const handleOpenTrial = () => setIsTrialOpen(true);

    window.addEventListener('openMembershipModal', handleOpenMembership);
    window.addEventListener('openFreeTrialModal', handleOpenTrial);

    return () => {
      window.removeEventListener('openMembershipModal', handleOpenMembership);
      window.removeEventListener('openFreeTrialModal', handleOpenTrial);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/nutrition/senior" element={<SeniorHealth />} />
        <Route path="/nutrition/:ageGroup" element={<NutritionDetails />} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
      <Footer />
      
      <MembershipModal isOpen={isMembershipOpen} onClose={() => setIsMembershipOpen(false)} selectedPlan={membershipPlan} />
      <FreeTrialModal isOpen={isTrialOpen} onClose={() => setIsTrialOpen(false)} />
    </>
  );
}

export default App;
