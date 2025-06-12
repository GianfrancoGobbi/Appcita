
import React from 'react';

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradientColors?: string; // e.g., "from-green-400 via-emerald-400 to-teal-500"
}

const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({
  children,
  className = '',
  gradientColors = 'from-green-300 via-green-400 to-green-500',
}) => {
  return (
    <span
      className={`bg-gradient-to-r ${gradientColors} bg-clip-text text-transparent animate-gradient-x bg-size-200 ${className}`}
    >
      {children}
    </span>
  );
};

export default AnimatedGradientText;