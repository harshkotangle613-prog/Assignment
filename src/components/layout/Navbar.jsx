import React, { useState } from 'react';
import './Navbar.css';

const navLinks = ['Home', 'Rules', 'Projects', 'Support', 'FAQ'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a href="#" className="navbar__logo">Elementum</a>

        <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          {navLinks.map(link => (
            <li key={link}>
              <a href="#" className="navbar__link">{link}</a>
            </li>
          ))}
        </ul>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
        </button>
      </div>
    </nav>
  );
}
