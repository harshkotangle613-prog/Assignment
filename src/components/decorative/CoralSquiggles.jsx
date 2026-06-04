import React from 'react';

/* Hero left squiggle */
export function HeroSquiggle({ className = '', style = {} }) {
  return (
    <svg
      className={className}
      style={style}
      width="60"
      height="180"
      viewBox="0 0 60 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M40,5 C20,20 55,45 25,65 C5,80 50,105 20,130 C5,145 35,165 30,175"
        stroke="#e84040"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/* Feature section flowing squiggle */
export function FeatureSquiggle({ className = '', style = {} }) {
  return (
    <svg
      className={className}
      style={style}
      width="500"
      height="300"
      viewBox="0 0 500 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10,10 C80,10 100,80 200,60 C300,40 350,150 280,200 C220,240 350,260 420,240 C460,230 490,260 495,280"
        stroke="#e84040"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/* Services section top-right squiggle */
export function ServicesSquiggle({ className = '', style = {} }) {
  return (
    <svg
      className={className}
      style={style}
      width="220"
      height="140"
      viewBox="0 0 220 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10,130 C50,100 20,60 80,50 C130,40 160,90 200,70 C215,62 220,40 210,20"
        stroke="#e84040"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/* Newsletter squiggle top-left */
export function NewsletterSquiggle({ className = '', style = {} }) {
  return (
    <svg
      className={className}
      style={style}
      width="120"
      height="80"
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10,70 C30,50 10,30 50,20 C80,12 100,40 110,15"
        stroke="#e84040"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
