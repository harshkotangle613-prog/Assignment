import React from 'react';
import './Footer.css';

const footerData = [
  {
    title: 'Company',
    links: ['Rules', 'Guide', 'Portfolio', 'Press'],
  },
  {
    title: 'Terms & Policies',
    links: ['Privacy Policy', 'Terms & Services', 'Cookies', 'Security'],
  },
  {
    title: 'Follow Us',
    links: ['Instagram', 'LinkedIn', 'YouTube', 'Twitter'],
  },
  {
    title: 'Terms & Policies',
    isContact: true,
    address: '3744 Plaza Dr STE\nAnn Arbor, MI 48108',
    phone: '070 34509823',
    email: 'elementum@example.com',
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__grid">
          {footerData.map((col, i) => (
            <div className="footer__col" key={i}>
              <h4 className="footer__title">{col.title}</h4>
              {col.isContact ? (
                <div className="footer__contact">
                  <p>{col.address}</p>
                  <p>{col.phone}</p>
                  <p>{col.email}</p>
                </div>
              ) : (
                <ul className="footer__list">
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" className="footer__link">{link}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <p>©2023 Elementum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
