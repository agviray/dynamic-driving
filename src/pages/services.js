import React from 'react';
import Layout from '../components/Layout';
import PageTemplate from '../templates/page-template';
import driversEduIcon from '../images/icons/instructor.png';
import behindWheelIcon from '../images/icons/steering-wheel.png';
import drivingTestIcon from '../images/icons/driving-test.png';
import defensiveDrivingIcon from '../images/icons/traffic-light-and-car.png';
import privateLessonsIcon from '../images/icons/driver-sitting-in-driving-seat.png';
import customProgramIcon from '../images/icons/happy-face.png';

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
      src: behindWheelIcon,
      alt: `Steering wheel icon`,
    },
    heading: [`Behind-the-Weel`, `Training`],
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

const Services = () => {
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
    <Layout>
      <PageTemplate>
        <section>
          <div className="services-hero"></div>
        </section>
        <section>
          <div className="main-content">
            <h2>Services</h2>
            <div className="services-cards">{renderedContent}</div>
          </div>
        </section>
      </PageTemplate>
    </Layout>
  );
};

export default Services;