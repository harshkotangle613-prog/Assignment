import React from 'react';
import './CircularPhoto.css';

export default function CircularPhoto({ src, alt, size = 90, className = '' }) {
  return (
    <div
      className={`circular-photo ${className}`}
      style={{ width: size, height: size }}
    >
      <img src={src} alt={alt || ''} />
    </div>
  );
}
