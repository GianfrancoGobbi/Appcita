

import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import ServicesSection from './components/ServicesSection.tsx';
import AboutSection from './components/AboutSection.tsx';
import TestimonialsSection from './components/TestimonialsSection.tsx';
import ContactSection from './components/ContactSection.tsx';
import Footer from './components/Footer.tsx';
import ParticleBackground from './components/ParticleBackground.tsx'; 
import { BRAND_MASCOT_SRC } from './assets.ts';

const App: React.FC = () => {
  const mascotRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const mascot = mascotRef.current;
    if (mascot) {
      let positionY = 0;
      let directionY = 1;
      let rotation = 0;
      let rotationDirection = 1;

      const animateMascot = () => {
        positionY += directionY * 0.3;
        rotation += rotationDirection * 0.2;

        if (positionY > 5 || positionY < -5) {
          directionY *= -1;
        }
        if (rotation > 5 || rotation < -5) {
          rotationDirection *= -1;
        }

        mascot.style.transform = `translateY(${positionY}px) rotate(${rotation}deg)`;
        requestAnimationFrame(animateMascot);
      };
      animateMascot();
    }
  }, []);

  return (
    // Removed bg-black from this div, body already has bg-black
    <div className="flex flex-col min-h-screen"> 
      <ParticleBackground />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Mascota animada en la esquina */}
      <div className="fixed bottom-4 left-4 z-40 hidden md:block" style={{ pointerEvents: 'none' }}>
        <img ref={mascotRef} src={BRAND_MASCOT_SRC} alt="Appcita Mascot" className="w-24 h-24 opacity-80" />
      </div>

    </div>
  );
};

export default App;