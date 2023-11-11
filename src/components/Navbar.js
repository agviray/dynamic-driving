import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">
          <span className="logo-container">DD</span>
        </Link>
        <div className="hamburger">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="nav-menu">
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
