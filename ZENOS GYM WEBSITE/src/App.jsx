import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Transformations from './components/Transformations';
import Trainers from './components/Trainers';
import Membership from './components/Membership';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}

export default App;
