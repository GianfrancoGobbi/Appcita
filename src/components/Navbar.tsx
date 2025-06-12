
import React, { useState, useEffect, useRef } from 'react';
import { COMPANY_NAME, NAV_LINKS } from '../constants';
import { NavLink } from '../types';
import Button from './common/Button';
import { BRAND_MASCOT_SRC } from '../assets';
import AnimatedHamburgerIcon from './common/AnimatedHamburgerIcon';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dotTranslateX, setDotTranslateX] = useState(0);
  const [currentAnimationDurationMs, setCurrentAnimationDurationMs] = useState(500);
  const animationTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const runAnimationCycle = () => {
      // 1. Move out
      const targetX = Math.floor(Math.random() * 7) + 2; // 2px to 8px
      const moveDuration = Math.floor(Math.random() * 500) + 300; // 300ms to 800ms
      
      setCurrentAnimationDurationMs(moveDuration);
      setDotTranslateX(targetX);

      // 2. Schedule return after move and hold
      const holdDuration = Math.floor(Math.random() * 1000) + 500; // Hold for 0.5s to 1.5s
      animationTimeoutRef.current = window.setTimeout(() => {
        setDotTranslateX(0);

        // 3. Schedule next cycle after return animation finishes + pause
        const pauseDuration = Math.floor(Math.random() * 3000) + 2000; // Pause for 2s to 5s
        animationTimeoutRef.current = window.setTimeout(runAnimationCycle, moveDuration + pauseDuration);
        
      }, moveDuration + holdDuration);
    };

    const initialDelay = Math.floor(Math.random() * 2000) + 1000; // Start after 1-3 seconds
    animationTimeoutRef.current = window.setTimeout(runAnimationCycle, initialDelay);

    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-black shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className={`flex items-center text-3xl font-bold ${isScrolled || isOpen ? 'text-green-400' : 'text-white'}`} onClick={closeMenu}>
            <img src={BRAND_MASCOT_SRC} alt={`${COMPANY_NAME} Mascot`} className="h-10 w-10 mr-2 rounded-full" />
            {COMPANY_NAME}
            <span 
              className="text-green-400 inline-block"
              style={{
                transform: `translateX(${dotTranslateX}px)`,
                transition: `transform ${currentAnimationDurationMs}ms ease-in-out`,
              }}
            >
              .
            </span>
          </a>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {NAV_LINKS.map((link: NavLink) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium ${isScrolled || isOpen ? 'text-gray-300 hover:text-green-400' : 'text-gray-100 hover:text-green-300'} transition-colors duration-300`}
              >
                {link.label}
              </a>
            ))}
            <Button variant="secondary" size="sm" onClick={() => { const el = document.getElementById('contact'); if(el) el.scrollIntoView({behavior: 'smooth'})}}>
              Empezar Proyecto
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md ${isScrolled || isOpen ? 'text-gray-300 hover:text-green-400' : 'text-gray-200 hover:text-green-300'} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400`}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Cerrar menú principal" : "Abrir menú principal"}
            >
              <span className="sr-only">{isOpen ? "Cerrar menú" : "Abrir menú"}</span>
              <AnimatedHamburgerIcon isOpen={isOpen} />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black shadow-lg py-2" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link: NavLink) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-gray-300 hover:bg-gray-800 hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
             <Button variant="secondary" size="md" className="w-full mt-2" onClick={() => { closeMenu(); const el = document.getElementById('contact'); if(el) el.scrollIntoView({behavior: 'smooth'})}}>
              Empezar Proyecto
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;