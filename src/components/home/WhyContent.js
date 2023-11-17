import React from 'react';
import instructor from '../../images/instructor.png';
import checklist from '../../images/checklist.png';
import calendar from '../../images/calendar.png';
import instructorAndStudent from '../../images/driving-instructor-teaching-student.jpg';
import driverWithKeys from '../../images/driving-student-holding-keys.jpeg';
import calendarDayOff from '../../images/calendar-marked-with-day-off.jpeg';

const whyCards = [
  {
    image: {
      src: instructorAndStudent,
      alt: 'Driving instructor teaching student',
    },
    heading: 'Experienced Instructors',
    text: `Our team of certified and experienced instructors brings a
    wealth of knowledge and expertise to every lesson, ensuring
    you receive the highest quality instruction.`,
  },
  {
    image: {
      src: driverWithKeys,
      alt: 'Student driver happily holding keys',
    },
    heading: 'Customized Learning Plans',
    text: `We recognize that every student is unique. Our personalized
    learning plans cater to your individual needs, pace, and
    learning style, maximizing your chances of success.`,
  },
  {
    image: {
      src: calendarDayOff,
      alt: 'Calendar marked with a day off',
    },
    heading: 'Flexible Scheduling',
    text: `Life can be busy, and we understand that. That's why we offer
    flexible scheduling options to accommodate your commitments
    and make it convenient for you to learn at your own pace.`,
  },
];

const WhyContent = () => {
  const renderedContent = whyCards.map(({ image, heading, text }, index) => {
    return (
      <article className="card" key={index}>
        <div>
          <span className="image-container">
            <img src={image.src} alt={image.alt} />
          </span>
          <div className="card-main-content">
            <h3>{heading}</h3>
            <div className="text-container">
              <p>{text}</p>
            </div>
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
