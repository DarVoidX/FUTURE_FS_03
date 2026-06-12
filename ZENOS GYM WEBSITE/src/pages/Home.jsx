import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import Transformations from '../components/Transformations';
import Trainers from '../components/Trainers';
import Membership from '../components/Membership';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <main>
      <Hero />
      <About />
      <Programs />
      <Transformations />
      <Trainers />
      <Membership />
      <Gallery />
      <Contact />
    </main>
  );
}

export default Home;
