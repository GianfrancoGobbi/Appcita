
import React, { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  baseSpeedX: number;
  baseSpeedY: number;
  opacity: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesArrayRef = useRef<Particle[]>([]);
  const orientationRef = useRef<{ beta: number | null; gamma: number | null }>({ beta: 0, gamma: 0 });

  const particleColors = [
    'rgba(0, 255, 127, 0.7)', // Spring Green
    'rgba(60, 179, 113, 0.7)', // Medium Sea Green
    'rgba(46, 204, 113, 0.6)', // Emerald
    'rgba(255, 255, 255, 0.5)', // White
    'rgba(127, 255, 212, 0.6)', // Aquamarine
  ];
  
  const MAX_PARTICLES = 100;
  const GYRO_SENSITIVITY = 0.05; // Adjust for more/less responsive movement

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const createParticles = () => {
      particlesArrayRef.current = [];
      for (let i = 0; i < MAX_PARTICLES; i++) {
        particlesArrayRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5, // Particle size between 0.5 and 2.5
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
          baseSpeedX: (Math.random() - 0.5) * 0.3, // Slow base horizontal speed
          baseSpeedY: (Math.random() - 0.5) * 0.3, // Slow base vertical speed
          opacity: Math.random() * 0.5 + 0.3, // Opacity between 0.3 and 0.8
        });
      }
    };

    createParticles();

    const handleOrientation = (event: DeviceOrientationEvent) => {
      orientationRef.current.beta = event.beta; // Front-back tilt (y-axis effect)
      orientationRef.current.gamma = event.gamma; // Left-right tilt (x-axis effect)
    };

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation, true);
    }
    
    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const beta = orientationRef.current.beta || 0;
      const gamma = orientationRef.current.gamma || 0;

      for (const particle of particlesArrayRef.current) {
        // Gyroscope influence
        const gyroInfluenceX = gamma * GYRO_SENSITIVITY;
        const gyroInfluenceY = beta * GYRO_SENSITIVITY;

        particle.x += particle.baseSpeedX + gyroInfluenceX;
        particle.y += particle.baseSpeedY + gyroInfluenceY;

        // Boundary checks (wrap around)
        if (particle.x > canvas.width + particle.size) particle.x = -particle.size;
        if (particle.x < -particle.size) particle.x = canvas.width + particle.size;
        if (particle.y > canvas.height + particle.size) particle.y = -particle.size;
        if (particle.y < -particle.size) particle.y = canvas.height + particle.size;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Create a temporary color with current particle opacity
        const baseColor = particle.color.substring(0, particle.color.lastIndexOf(','))
        ctx.fillStyle = `${baseColor}, ${particle.opacity})`;

        ctx.fill();
      }
      requestAnimationFrame(animateParticles);
    };

    animateParticles();

    const handleResize = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      createParticles(); // Recreate particles for new screen size
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (window.DeviceOrientationEvent) {
        window.removeEventListener('deviceorientation', handleOrientation, true);
      }
      // Consider canceling animation frame if component unmounts, though usually not critical for background
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: -1, // Ensure it's behind all other content
        pointerEvents: 'none' // Prevent canvas from intercepting mouse events
      }} 
      aria-hidden="true" 
    />
  );
};

export default ParticleBackground;
