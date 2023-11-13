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
          <span className="logo-container">DYNAMIC DRIVING</span>
        </Link>
        <div className={`nav-menu ${isMenuOpen ? 'is-open' : ''}`}>
          <ul>
            <li>
              <a href="/">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Services</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Reviews</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
