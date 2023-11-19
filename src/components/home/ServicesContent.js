import React from 'react';
import { Link } from 'gatsby';
import driversEduIcon from '../../images/icons/driver-sitting-in-driving-seat.png';
import steeringWheelIcon from '../../images/icons/steering-wheel.png';
import drivingTestIcon from '../../images/icons/driving-test.png';

const servicesCards = [
  {
    icon: {
      src: driversEduIcon,
      alt: `Driver sitting icon`,
    },
    heading: `Driver's Education Courses`,
    text: ``,
  },
  {
    icon: {
      src: steeringWheelIcon,
      alt: `Steering wheel icon`,
    },
    heading: `Behind-the-Weel Training`,
    text: ``,
  },
  {
    icon: {
      src: drivingTestIcon,
      alt: `Paper and pencil icon`,
    },
    heading: `Driver's License Test Preparation`,
    text: ``,
  },
];

const ServicesContent = () => {
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
            <h3>{heading}</h3>
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
              <div>
                <span>View All</span>
                <span>Services</span>
              </div>
            </Link>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;
