import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Music from './components/Music';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-neon-pink selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Music />
        <Events />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;