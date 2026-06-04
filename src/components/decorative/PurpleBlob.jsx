import React from 'react';

export default function PurpleBlob({ className = '', style = {} }) {
  return (
    <svg
      className={className}
      style={style}
      width="70"
      height="100"
      viewBox="0 0 70 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M35 5 C55 5, 68 20, 65 42 C62 64, 50 80, 35 95 C20 80, 8 64, 5 42 C2 20, 15 5, 35 5 Z"
        fill="#7b5ea7"
      />
    </svg>
  );
}
