import React from 'react';
import PurpleBlob from '../decorative/PurpleBlob';
import { NewsletterSquiggle } from '../decorative/CoralSquiggles';
import './NewsletterSection.css';

export default function NewsletterSection() {
  return (
    <section className="newsletter">
      <NewsletterSquiggle className="newsletter__squiggle" />
      <PurpleBlob className="newsletter__blob" />

      <div className="newsletter__inner container">
        <h2 className="newsletter__headline">
          Subscribe to<br />
          our newsletter
        </h2>
        <p className="newsletter__subtext">
          To make your stay special and even more memorable
        </p>
        <button className="newsletter__btn">
          Enter Email
        </button>
      </div>
    </section>
  );
}
