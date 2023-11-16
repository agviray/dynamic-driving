import React from 'react';
import instructor from '../../images/instructor.png';
import checklist from '../../images/checklist.png';
import calendar from '../../images/calendar.png';

const whyCards = [
  {
    icon: {
      src: instructor,
      alt: 'Instructor icon',
    },
    heading: 'Experienced Instructors',
    text: `Our team of certified and experienced instructors brings a
    wealth of knowledge and expertise to every lesson, ensuring
    you receive the highest quality instruction.`,
  },
  {
    icon: {
      src: checklist,
      alt: 'Checklist icon',
    },
    heading: 'Customized Learning Plans',
    text: `We recognize that every student is unique. Our personalized
    learning plans cater to your individual needs, pace, and
    learning style, maximizing your chances of success.`,
  },
  {
    icon: {
      src: calendar,
      alt: 'Calendar icon',
    },
    heading: 'Flexible Scheduling',
    text: `Life can be busy, and we understand that. That's why we offer
    flexible scheduling options to accommodate your commitments
    and make it convenient for you to learn at your own pace.`,
  },
];

const WhyContent = () => {
  const renderedContent = whyCards.map(({ icon, heading, text }, index) => {
    return (
      <article className="card" key={index}>
        <div>
          <div className="icon-container">
            <span className="icon">
              <img src={icon.src} alt={icon.alt} />
            </span>
          </div>
          <h3>{heading}</h3>
          <div className="text-container">
            <p>{text}</p>
          </div>
        </div>
      </article>
    );
  });
  return (
    <div className="why-content">
      <h2>Why Choose Dynamic Driving</h2>
      <div className="main-content">
        <div className="why-collection">{renderedContent}</div>
      </div>
    </div>
  );
};

export default WhyContent;
