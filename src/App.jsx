import React from 'react';

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Events';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Janvi Technologies';
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-300 via-white to-teal-400 font-sans">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
