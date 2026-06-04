import React from 'react';
import CircularPhoto from '../ui/CircularPhoto';
import SquiggleUnderline from '../ui/SquiggleUnderline';
import Triangle from '../decorative/Triangle';
import './FeatureSection.css';

export default function FeatureSection({
  variant = 'tomorrow',   // 'tomorrow' | 'progress'
  headline,
  body,
  imageSrc,
  imageAlt,
}) {
  const reversed = variant === 'progress';

  const TextContent = () => (
    <div className="feature__text">
      <h2 className="feature__headline">
        {headline}
      </h2>
      <p className="feature__body">
        We are a team of strategists, designers communicators, researchers.
        Togsather, we belive that progress only hghappens when you refuse
        to play things safe.
      </p>
      <a href="#" className="feature__readmore">
        Read more <span className="feature__readmore-arrow">›</span>
      </a>
    </div>
  );

  const ImageContent = () => (
    <div className={`feature__image-wrap feature__image-wrap--${variant}`}>
      {variant === 'tomorrow' && (
        <>
          <div className="feature__glow" />
          <div className="feature__rect" />
        </>
      )}
      {variant === 'progress' && (
        <>
          <Triangle size={120} className="feature__triangle feature__triangle--large" />
          <Triangle size={50} className="feature__triangle feature__triangle--small" />
        </>
      )}
      <CircularPhoto
        src={imageSrc}
        alt={imageAlt}
        size={270}
        className="feature__photo"
      />
    </div>
  );

  return (
    <section className={`feature feature--${variant}`}>
      <div className="feature__inner container">
        <div className={`feature__grid${reversed ? ' feature__grid--reversed' : ''}`}>
          {reversed ? (
            <>
              <ImageContent />
              <TextContent />
            </>
          ) : (
            <>
              <TextContent />
              <ImageContent />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
