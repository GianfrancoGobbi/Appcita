import React from 'react';

const AnimatedCheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 20 20"
      // The overall fill (e.g., text-green-400) is passed via props.className
      // and will be used by `fill="currentColor"` on the circle path.
      {...props} 
    >
      {/* Circle background - filled with currentColor (e.g., green via props.className) */}
      <path 
        className="animated-check-circle-bg"
        fillRule="evenodd" 
        d="M10 18a8 8 0 100-16 8 8 0 000 16z" 
        clipRule="evenodd" 
        fill="currentColor" 
      />
      {/* Checkmark - filled with white */}
      <path 
        className="animated-check-mark-simple"
        fillRule="evenodd"
        d="M13.707 8.293a1 1 0 00-1.414 0L9 11.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
        clipRule="evenodd"
        fill="white"
      />
    </svg>
  );
};

export default AnimatedCheckCircleIcon;
