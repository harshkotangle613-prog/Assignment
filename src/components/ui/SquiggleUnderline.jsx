import React from 'react';
import './SquiggleUnderline.css';

export default function SquiggleUnderline({ children, color = 'orange' }) {
  let strokeColor = '#e59f3c';
  if (color === 'green') strokeColor = '#6abf6a';
  if (color === 'red') strokeColor = '#e84040';

  return (
    <span className={`squiggle squiggle--${color}`}>
      {children}
      <svg
        className="squiggle__svg"
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0,4 C10,0 15,8 25,4 C35,0 40,8 50,4 C60,0 65,8 75,4 C85,0 90,8 100,4"
          fill="none"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
