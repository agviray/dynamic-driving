import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
  return (
    <nav>
      <div>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link to="/">
          <span className="logo-container">Dynamic Driving</span>
        </Link>
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
