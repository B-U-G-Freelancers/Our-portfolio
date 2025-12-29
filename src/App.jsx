import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import CustomCursor from './components/Cursor/CustomCursor';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Hero/Hero';
import LogoLoop from './components/Clients/LogoLoop';
import Services from './components/Services/Services';
import About from './components/About/About';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import Footer from './components/Layout/Footer';
import Preloader from './components/UI/Preloader';
import FloatingParticles from './components/UI/FloatingParticles';
import ScrollProgress from './components/UI/ScrollProgress';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="app-wrapper">
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollProgress />
          <FloatingParticles />
          <CustomCursor />
          <Navbar />

          <main>
            <Hero />
            <LogoLoop />

            <div id="services">
              <Services />
            </div>

            <div id="about">
              <About />
            </div>

            <div id="team">
              <Team />
            </div>

            <div id="contact">
              <Contact />
            </div>
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

