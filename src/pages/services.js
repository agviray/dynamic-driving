import React from 'react';
import Layout from '../components/Layout';
import PageTemplate from '../templates/page-template';
import driversEduIcon from '../images/icons/driver-sitting-in-driver-seat.png';
import behindWheelIcon from '../images/icons/steering-wheel.png';
import drivingTestIcon from '../images/icons/driving-test.png';
import defensiveDrivingIcon from '../images/icons/traffic-light-and-car.png';
import privateLessonsIcon from '../images/icons/private-lesson.png';
import customProgramIcon from '../images/icons/happy-face.png';
import Accordion from '../components/Accordion';

const servicesCards = [
  {
    icon: {
      src: driversEduIcon,
      alt: `Driver sitting in driver seat icon`,
    },
    heading: `Driver's Education Courses`,
    text: `We provide comprehensive driver's education courses, covering both theoretical and practical aspects of driving. Our courses often include classroom instruction on traffic laws, road signs, and safety regulations.`,
  },
  {
    icon: {
      src: behindWheelIcon,
      alt: `Steering wheel icon`,
    },
    heading: `Behind-the-Wheel Training`,
    text: `We offer practical, hands-on training with a certified driving instructor. This involves behind-the-wheel driving practice, where students learn vehicle control, proper maneuvering, and safe driving techniques on the road.`,
  },
  {
    icon: {
      src: drivingTestIcon,
      alt: `Paper and pencil icon`,
    },
    heading: `Driver's License Test Preparation`,
    text: `Our preparation courses are specifically designed to help students pass their driver's license tests. These programs cover the specific requirements and skills needed to successfully navigate the written and practical portions of the examination.`,
  },
  {
    icon: {
      src: defensiveDrivingIcon,
      alt: `Traffic light and car`,
    },
    heading: `Defensive Driving Courses`,
    text: `We offer defensive driving courses to teach students how to anticipate and respond to potential hazards on the road. These courses focus on developing safe driving habits, reducing risks, and handling unexpected situations.`,
  },
  {
    icon: {
      src: privateLessonsIcon,
      alt: `Driver sitting in driver's seat`,
    },
    heading: `Private Lessons`,
    text: `One-on-one instruction for individuals who prefer personalized attention and a more flexible schedule.`,
  },
  {
    icon: {
      src: customProgramIcon,
      alt: `Smiley face`,
    },
    heading: `Specialized/Custom Training Programs`,
    text: `We provide tailored programs for specific demographics or needs, such as teen driver education, senior driver refresher courses, and adaptive driving programs for individuals with disabilities.`,
  },
];

const Services = () => {
  const renderedContent = servicesCards.map(
    ({ icon, heading, text }, index) => {
      return (
        <article className="services-card" key={index}>
          <Accordion
            header={{ icon: icon, heading: heading }}
            content={text}
            showArrow={false}
          />
        </article>
      );
    }
  );
  return (
    <Layout>
      <PageTemplate>
        <div className="services-page">
          <section>
            <div className="services-hero">
              <div className="page-heading-content">
                <h2>Services</h2>
                <div className="description">
                  <p>
                    We cater to a diverse range of learners, ensuring that each
                    student receives the proper training needed to safely
                    navigate the complexities of the road.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="main-content">
              <div className="paragraph-group">
                <p>
                  Click a service to view its details. If what you're looking
                  for isn't listed, give us a shout! We're always happy to
                  answer questions and help in any way that we can.
                </p>
              </div>
              <div className="services-cards">{renderedContent}</div>
            </div>
          </section>
        </div>
      </PageTemplate>
    </Layout>
  );
};

export default Services;
