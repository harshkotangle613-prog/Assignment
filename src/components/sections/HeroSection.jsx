import React from 'react';
import CircularPhoto from '../ui/CircularPhoto';
import SquiggleUnderline from '../ui/SquiggleUnderline';
import HighlightWord from '../ui/HighlightWord';
import PurpleBlob from '../decorative/PurpleBlob';
import { HeroSquiggle } from '../decorative/CoralSquiggles';
import './HeroSection.css';

// Using diverse unsplash portrait photos
const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&h=200&fit=crop&crop=face', alt: 'Person 1', size: 85 },
  { id: 2, src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&crop=face', alt: 'Person 2', size: 80 },
  { id: 3, src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face', alt: 'Person 3', size: 90 },
  { id: 4, src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face', alt: 'Person 4', size: 95 },
  { id: 5, src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face', alt: 'Person 5', size: 90 },
  { id: 6, src: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=200&h=200&fit=crop&crop=face', alt: 'Person 6', size: 85 },
  { id: 7, src: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop&crop=face', alt: 'Person 7', size: 95 },
  { id: 8, src: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&h=200&fit=crop&crop=face', alt: 'Person 8', size: 90 },
];

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__inner container">

        {/* Decorative elements */}
        <HeroSquiggle className="hero__squiggle" />
        <PurpleBlob className="hero__blob" />

        {/* Headline */}
        <div className="hero__headline-wrap">
          <h1 className="hero__headline">
            The <SquiggleUnderline color="orange">thinkers and</SquiggleUnderline><br />
            doers were <HighlightWord color="pink">changing</HighlightWord><br />
            the <HighlightWord color="mint">status</HighlightWord> Quo with
          </h1>
          <p className="hero__subtext">
            We are a team of strategists, designers communicators, researchers. Togsather,<br />
            we belive that progress only hghappens when you refuse to play things safe.
          </p>
        </div>

        {/* Scattered photo grid */}
        <div className="hero__photos">
          <div className="hero__photos-scatter">
            {photos.map((photo) => (
              <CircularPhoto
                key={photo.id}
                src={photo.src}
                alt={photo.alt}
                size={photo.size}
                className={`hero__photo hero__photo--${photo.id}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
