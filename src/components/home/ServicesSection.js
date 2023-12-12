import React from 'react';
import PageLink from '../PageLink';
import driversEduIcon from '../../images/icons/driver-sitting-in-driver-seat.png';
import behindWheelIcon from '../../images/icons/steering-wheel.png';
import drivingTestIcon from '../../images/icons/driving-test.png';
import defensiveDrivingIcon from '../../images/icons/traffic-light-and-car.png';
import privateLessonsIcon from '../../images/icons/private-lesson.png';
import customProgramIcon from '../../images/icons/happy-face.png';

const servicesCards = [
  {
    icon: {
      src: driversEduIcon,
      alt: `Driver sitting in driver seat icon`,
    },
    heading: [`Driver's Education`, `Courses`],
    text: ``,
  },
  {
    icon: {
      src: behindWheelIcon,
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
  {
    icon: {
      src: defensiveDrivingIcon,
      alt: `Traffic light and car`,
    },
    heading: [`Defensive Driving`, `Courses`],
    text: ``,
  },
  {
    icon: {
      src: privateLessonsIcon,
      alt: `Driver sitting in driver's seat`,
    },
    heading: [`Private`, `Lessons`],
    text: ``,
  },
  {
    icon: {
      src: customProgramIcon,
      alt: `Smiley face`,
    },
    heading: [`Specialized/Custom`, `Training Programs`],
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
        <div className="services-cards">{renderedContent}</div>
      </div>
      <PageLink toPage={'services'} name={'View Service Details'} />
    </div>
  );
};

export default ServicesSection;
