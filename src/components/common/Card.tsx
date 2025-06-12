
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick, hoverEffect = false }) => {
  const hoverStyles = hoverEffect ? "transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1" : "";
  return (
    <div
      className={`bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 ${hoverStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;