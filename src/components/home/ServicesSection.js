import React from 'react';
import { Link } from 'gatsby';
import driversEduIcon from '../../images/icons/instructor.png';
import steeringWheelIcon from '../../images/icons/steering-wheel.png';
import drivingTestIcon from '../../images/icons/driving-test.png';

const servicesCards = [
  {
    icon: {
      src: driversEduIcon,
      alt: `Instructor teaching`,
    },
    heading: [`Driver's Education`, `Courses`],
    text: ``,
  },
  {
    icon: {
      src: steeringWheelIcon,
      alt: `Steering wheel icon`,
    },
    heading: [`Behind-the-Wheel`, `Training`],
    text: ``,
  },
  {
    icon: {
      src: drivingTestIcon,
      alt: `Paper and pencil icon`,
    },
    heading: [`Driver's License`, `Test Preparation`],
    text: ``,
  },
];

const ServicesSection = () => {
  const renderedContent = servicesCards.map(({ icon, heading }, index) => {
    return (
      <article className="card" key={index}>
        <div>
          <div className="card-main-content">
            <span className="icon-container">
              <span>
                <img src={icon.src} alt={icon.alt} />
              </span>
            </span>
            <h3>
              {heading.map((text, index) => (
                <span key={index}>{text}</span>
              ))}
            </h3>
          </div>
        </div>
      </article>
    );
  });

  return (
    <div className="services-content">
      <h2>Our Services</h2>
      <div className="main-content">
        <div className="services-collection">
          {renderedContent}
          <article className="more-link-container">
            <Link to="/services">
              <h3>
                <span>View All</span>
                <span>Services</span>
              </h3>
            </Link>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
