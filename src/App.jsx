import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { FeatureSquiggle } from './components/decorative/CoralSquiggles.jsx';
import HeroSection from './components/sections/HeroSection';
import FeatureSection from './components/sections/FeatureSection';
import ServicesSection from './components/sections/ServicesSection';
import TestimonialSection from './components/sections/TestimonialSection';
import NewsletterSection from './components/sections/NewsletterSection';

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <div className="feature-wrapper" style={{ position: 'relative' }}>
          <FeatureSquiggle className="feature-squiggle" style={{ position: 'absolute', top: '-20px', left: '-20px', width: '500px', height: '300px', pointerEvents: 'none', zIndex: -1 }} />
          <HeroSection />

          <FeatureSection
            variant="tomorrow"
            headline="should be better than today"
            headlineHighlight="Tomorrow"
            imageSrc="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop&crop=center"
            imageAlt="Team collaboration"
          />

          <FeatureSection
            variant="progress"
            headline="See how we can help you progress"
            imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop&crop=center"
            imageAlt="Team working"
          />
        </div>

        <ServicesSection />

        <TestimonialSection />

        <NewsletterSection />
      </main>

      <Footer />
    </div>
  );
}
