import React from 'react';
import instructor from '../../images/instructor.png';
import checklist from '../../images/checklist.png';
import calendar from '../../images/calendar.png';

const WhyContent = () => {
  return (
    <div className="why-content">
      <h2>Why Choose Dynamic Driving</h2>
      <div className="main-content">
        <div className="why-collection">
          <article className="card">
            <div>
              <div className="icon-container">
                <span className="icon">
                  <img src={instructor} alt="Instructor icon" />
                </span>
              </div>
              <h3>Experienced Instructors</h3>
              <div className="text-container">
                <p>
                  Our team of certified and experienced instructors brings a
                  wealth of knowledge and expertise to every lesson, ensuring
                  you receive the highest quality instruction.
                </p>
              </div>
            </div>
          </article>
          <article className="card">
            <div>
              <div className="icon-container">
                <span className="icon">
                  <img src={checklist} alt="Checklist icon" />
                </span>
              </div>
              <h3>Customized Learning Plans</h3>
              <div className="text-container">
                <p>
                  We recognize that every student is unique. Our personalized
                  learning plans cater to your individual needs, pace, and
                  learning style, maximizing your chances of success.
                </p>
              </div>
            </div>
          </article>
          <article className="card">
            <div>
              <div className="icon-container">
                <span className="icon">
                  <img src={calendar} alt="Calendar icon" />
                </span>
              </div>
              <h3>Flexible Scheduling</h3>
              <div className="text-container">
                <p>
                  Life can be busy, and we understand that. That's why we offer
                  flexible scheduling options to accommodate your commitments
                  and make it convenient for you to learn at your own pace.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default WhyContent;
