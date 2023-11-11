import React, { useState } from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div>
        <div
          className={`hamburger ${isMenuOpen ? 'is-open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
        </div>
        <div
          className={`overlay ${isMenuOpen ? 'is-open' : ''}`}
          onClick={toggleMenu}
        ></div>
        <Link to="/">
          <span className="logo-container">Dynamic Driving</span>
        </Link>
        <div className={`nav-menu ${isMenuOpen ? 'is-open' : ''}`}>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Reviews</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
