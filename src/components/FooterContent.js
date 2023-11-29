import React from 'react';
import { Link } from 'gatsby';

const currentYear = new Date().getFullYear();

const FooterContent = () => {
  return (
    <div className="inner-footer-container">
      <div className="content-block">
        <h2>Dynamic Driving</h2>
        <p>1234 Smith Street</p>
        <p>Houston, Texas 77056</p>
      </div>
      <div className="content-block">
        <h2>Quick Links</h2>
        <ul>
          <li>
            <Link to="#">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span>Services</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="content-block">
        <h2>More Info</h2>
        <ul>
          <li>
            <Link to="#">
              <span>Reviews</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span>FAQ</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="content-block">
        <h2>Let's Connect</h2>
        <ul>
          <li>
            <Link to="#">
              <span>Instagram</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span>Twitter</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span>Facebook</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="content-block">
        <div className="copyright">&copy; {currentYear} Dynamic Driving</div>
      </div>
    </div>
  );
};

export default FooterContent;
