import React from 'react';
import ServiceRow from '../ui/ServiceRow';
import SquiggleUnderline from '../ui/SquiggleUnderline';
import HighlightWord from '../ui/HighlightWord';
import { ServicesSquiggle } from '../decorative/CoralSquiggles';

import './ServicesSection.css';

const services = [
  {
    category: 'Office of multiple interest content',
    service: 'Collaborative & partnership',
  },
  {
    category: 'The hanger US Air force digital experimental',
    service: 'We talk about our weight',
  },
  {
    category: 'Delta faucet content, social, digital',
    service: 'Piloting digital confidence',
  },
];

export default function ServicesSection() {
  return (
    <section className="services">
      <div className="services__inner container">
        <ServicesSquiggle className="services__squiggle" />

        <div className="services__top">
          <h2 className="services__headline">
            What we <HighlightWord color="mint">can</HighlightWord><br />
            <SquiggleUnderline color="orange">offer</SquiggleUnderline> you!
          </h2>
        </div>

        <div className="services__table">
          {services.map((s, i) => (
            <ServiceRow
              key={i}
              category={s.category}
              service={s.service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
