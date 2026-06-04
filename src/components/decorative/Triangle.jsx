import React from 'react';

export default function Triangle({ size = 80, color = '#e85a5a', rotation = 0, className = '', style = {} }) {
  return (
    <svg
      className={className}
      style={{ transform: `rotate(${rotation}deg)`, ...style }}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polygon points="50,5 95,95 5,95" fill={color} />
    </svg>
  );
}
