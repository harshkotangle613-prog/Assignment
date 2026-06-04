import React from 'react';
import './HighlightWord.css';

export default function HighlightWord({ children, color = 'pink' }) {
  return (
    <span className={`highlight-word highlight-word--${color}`}>
      {children}
    </span>
  );
}
