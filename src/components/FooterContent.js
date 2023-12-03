import React from 'react';
import { Link } from 'gatsby';
import instagramIcon from '../images/icons/instagram-logo.svg';
import twitterXIcon from '../images/icons/twitter-x-logo.svg';
import facebookIcon from '../images/icons/facebook-logo.svg';

const currentYear = new Date().getFullYear();

const footerContentBlocks = [
  {
    heading: 'Quick Links',
    containsExternalLinks: false,
    links: [
      {
        icon: null,
        text: 'Home',
        to: '/',
      },
      {
        icon: null,
        text: 'About',
        to: '/about',
      },
      {
        icon: null,
        text: 'Services',
        to: '/services',
      },
    ],
  },
  {
    heading: 'More Info',
    containsExternalLinks: false,
    links: [
      {
        icon: null,
        text: 'Reviews',
        to: '/reviews',
      },
      {
        icon: null,
        text: 'FAQ',
        to: '/faq',
      },
      {
        icon: null,
        text: 'Contact',
        to: '/contact',
      },
    ],
  },
  {
    heading: 'Social',
    containsExternalLinks: true,
    links: [
      {
        icon: { imgSrc: instagramIcon, alt: 'Instagram logo' },
        to: 'https://www.instagram.com/',
      },
      {
        icon: { imgSrc: twitterXIcon, alt: 'Twitter aka X logo' },
        to: 'https://twitter.com/',
      },
      {
        icon: { imgSrc: facebookIcon, alt: 'Facebook logo' },
        to: 'https://www.facebook.com/',
      },
    ],
  },
];

const FooterContent = () => {
  const renderedContent = footerContentBlocks.map(
    ({ heading, containsExternalLinks, links }, index) => (
      <article key={index} className="content-block">
        <h3>{heading}</h3>
        <ul className={containsExternalLinks ? 'social' : null}>
          {links.map(({ icon, text, to }, index) => (
            <li key={index}>
              {containsExternalLinks ? (
                <a href={to} target="_blank" rel="noreferrer noopener">
                  <span className="icon-container">
                    <img src={icon.imgSrc} alt={icon.alt} />
                  </span>
                </a>
              ) : (
                <>
                  <span className="arrow"></span>
                  <Link to={to}>{text}</Link>
                </>
              )}
            </li>
          ))}
        </ul>
      </article>
    )
  );

  return (
    <div className="footer-content">
      <div className="content-blocks">
        <article className="company-info">
          <h2>Dynamic Driving</h2>
          <p>1234 Smith Street</p>
          <p>Houston, Texas 77056</p>
          <p>(000) 123-4567</p>
          <p>emailaddress@example.com</p>
        </article>
        <>{renderedContent}</>
      </div>
      <div className="copyright">&copy; {currentYear} Dynamic Driving</div>
    </div>
  );
};

export default FooterContent;
