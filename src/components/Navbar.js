import React, { useState } from 'react';
import { Link } from 'gatsby';

const navlinks = [
  {
    linkName: 'Home',
    href: '/#hero',
  },
  {
    linkName: 'About',
    href: '#about',
  },
  {
    linkName: 'Services',
    href: '#services',
  },
  {
    linkName: 'Reviews',
    href: '#reviews',
  },
  {
    linkName: 'Contact',
    href: '#contact',
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    return isMenuOpen ? setIsMenuOpen(false) : null;
  };

  const renderedContent = navlinks.map(({ linkName, href }, index) => {
    return (
      <li key={index}>
        <a href={href}>
          <span onClick={closeMobileMenu}>{linkName}</span>
        </a>
      </li>
    );
  });

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
          <ul>{renderedContent}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
