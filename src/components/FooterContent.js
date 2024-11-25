import React from 'react';
import { Link } from 'gatsby';
import instagramIcon from '../images/icons/instagram-logo.svg';
import twitterXIcon from '../images/icons/twitter-x-logo.svg';
import facebookIcon from '../images/icons/facebook-logo.svg';
import locationIcon from '../images/icons/location-icon.png';
import phoneIcon from '../images/icons/phone-icon.png';
import emailIcon from '../images/icons/email-icon.png';

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
      // {
      //   icon: null,
      //   text: 'FAQ',
      //   to: '/faq',
      // },
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
          <h2>DYNAMIC DRIVING</h2>
          <ul>
            <li>
              <span className="icon-container">
                <img src={locationIcon} alt="Location icon" />
              </span>
              <span className="text-container">
                <span>9730 Town Park Dr. Suite #95</span>
                <span>Houston, TX 77036</span>
              </span>
            </li>
            <li>
              <span className="icon-container">
                <img src={phoneIcon} alt="Phone icon" />
              </span>
              <span className="text-container">
                <span>(832) 859 - 2519</span>
              </span>
            </li>
            <li>
              <span className="icon-container">
                <img src={emailIcon} alt="Email icon" />
              </span>
              <a href="mailto:dynamic.driving.houston@gmail.com">
                <span className="text-container">
                  <span>dynamic.driving.houston@gmail.com</span>
                </span>
              </a>
            </li>
          </ul>
        </article>
        <>{renderedContent}</>
      </div>
      <div className="copyright">&copy; {currentYear} DYNAMIC DRIVING</div>
    </div>
  );
};

export default FooterContent;
