import React from 'react';

interface AnimatedHamburgerIconProps extends React.SVGProps<SVGSVGElement> {
  isOpen: boolean;
}

const AnimatedHamburgerIcon: React.FC<AnimatedHamburgerIconProps> = ({ isOpen, className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 ${className || ''}`}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`hamburger-line hamburger-line-top ${isOpen ? 'open' : ''}`}
        d="M4 6h16"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`hamburger-line hamburger-line-middle ${isOpen ? 'open' : ''}`}
        d="M4 12h16"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`hamburger-line hamburger-line-bottom ${isOpen ? 'open' : ''}`}
        d="M4 18h16"
      />
    </svg>
  );
};

export default AnimatedHamburgerIcon;