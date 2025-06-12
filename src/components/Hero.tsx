
import React from 'react';
import Button from './common/Button';
import AnimatedGradientText from './common/AnimatedGradientText';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center py-20 md:py-32 pt-32 md:pt-40"> {/* Ajustado pt para compensar navbar */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          Transformamos Ideas en <AnimatedGradientText className="block md:inline">Realidad Digital</AnimatedGradientText>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
          En Appcita, creamos aplicaciones web y móviles innovadoras que impulsan tu negocio.
          Soluciones a medida, diseño excepcional y tecnología de vanguardia.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4">
          <Button variant="primary" size="lg" onClick={() => { const el = document.getElementById('contact'); if(el) el.scrollIntoView({behavior: 'smooth'})}}>
            Comienza tu Proyecto
          </Button>
          <Button variant="outline" size="lg" className="text-white border-green-400 hover:bg-green-400 hover:text-black" onClick={() => { const el = document.getElementById('services'); if(el) el.scrollIntoView({behavior: 'smooth'})}}>
            Nuestros Servicios
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <svg className="w-8 h-8 text-green-400 opacity-70" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;