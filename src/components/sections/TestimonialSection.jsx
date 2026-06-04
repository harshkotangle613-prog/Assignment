import React from 'react';
import CircularPhoto from '../ui/CircularPhoto';
import SquiggleUnderline from '../ui/SquiggleUnderline';
import HighlightWord from '../ui/HighlightWord';
import './TestimonialSection.css';

const avatars = [
  // Left side
  { id: 1, src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face', alt: 'Customer 1', size: 60 },
  { id: 2, src: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=120&h=120&fit=crop&crop=face', alt: 'Customer 2', size: 50 },
  { id: 3, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face', alt: 'Customer 3', size: 85 },
  { id: 4, src: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&h=120&fit=crop&crop=face', alt: 'Customer 4', size: 55 },
  // Right side
  { id: 5, src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face', alt: 'Customer 5', size: 60 },
  { id: 6, src: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=120&h=120&fit=crop&crop=face', alt: 'Customer 6', size: 50 },
  { id: 7, src: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&h=120&fit=crop&crop=face', alt: 'Customer 7', size: 60 },
  { id: 8, src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=face', alt: 'Customer 8', size: 90 },
];

export default function TestimonialSection() {
  return (
    <section className="testimonial">
      <div className="testimonial__inner container">

        {/* Scattered avatars */}
        {avatars.map((a) => (
          <CircularPhoto
            key={a.id}
            src={a.src}
            alt={a.alt}
            size={a.size}
            className={`testimonial__avatar testimonial__avatar--${a.id}`}
          />
        ))}

        {/* Center quote */}
        <div className="testimonial__content">
          <h2 className="testimonial__headline">
            <HighlightWord color="mint">What</HighlightWord> our customer<br />
            says <SquiggleUnderline color="orange">About Us</SquiggleUnderline>
          </h2>

          <div className="testimonial__quote-wrap">
            <span className="testimonial__quote-open">“</span>
            <p className="testimonial__quote-text">
              Elementum delivered the site on a tight deadline,
              as they had promised. In the end, the client saw a 40%
              increase in traffic within two days of launch. They
              also met an improvement ability to use terminology that
              the company had missed, which have also proved to
              be easy to use and reliable.
            </p>
            <span className="testimonial__quote-close">”</span>
          </div>
        </div>

      </div>
    </section>
  );
}
