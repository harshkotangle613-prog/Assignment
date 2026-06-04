import React from 'react';
import './ServiceRow.css';

export default function ServiceRow({ category, service, children }) {
  return (
    <div className="service-row">

      <div className="service-row__category">
        <p>{category}</p>
      </div>
      <div className="service-row__name">
        <span>{service}</span>
        {children}
      </div>
      <div className="service-row__arrow">
        <span>→</span>
      </div>
    </div>
  );
}
