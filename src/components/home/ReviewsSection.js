import React from 'react';
import Carousel from '../Carousel';
import PageLink from '../PageLink';
import studentDriver01 from '../../images/student-driver-01.jpg';
import studentDriver02 from '../../images/student-driver-02.jpg';
import studentDriver03 from '../../images/student-driver-03.jpg';

const studentReviewsCards = [
  {
    name: 'Tammy N.',
    profileImage: {
      src: studentDriver01,
      alt: 'Profile picture of reviewer',
    },
    starRating: 5,
    review: `I couldn't have asked for a better experience while learning how to drive. The instructors were incredibly patient and understanding, especially with someone like me, who was a bit nervous behind the wheel. The lessons were structured in a way that gradually built my confidence and skill set. Sessions were informative, covering everything from road rules to defensive driving techniques. During the hands-on learning, the instructor was supportive. He provided constructive feedback that helped me improve with each lesson. I passed my driving test with flying colors, and I owe it all to the team at Dynamic Driving. Highly recommend.`,
  },
  {
    name: 'Debra H.',
    profileImage: {
      src: studentDriver02,
      alt: 'Profile picture of reviewer',
    },
    starRating: 5,
    review: `I've always been eager to learn how to drive, and I'm just glad that I chose Dynamic Driving to teach me. Their instructors were not only knowledgeable, but they also made the entire process enjoyable as well. They took the time to understand my strengths and weaknesses, tailoring the lessons to address areas where I needed more practice. I feel confident and prepared for the road now, and I highly recommend Dynamic Driving to anyone looking a personalized driving education.`,
  },
  {
    name: 'Danny C.',
    profileImage: {
      src: studentDriver03,
      alt: 'Profile picture of reviewer',
    },
    starRating: 5,
    review: `Choosing Dynamic Driving was the best decision I made on my journey to getting my driver's license. The instructors were not only professional but also friendly, creating a very comfortable learning environment. Their approach to teaching was well-balanced, ensuring that I grasped the concepts and applied them on the road. I also found that the emphasis on defensive driving was particularly valuable, teaching me how to anticipate and handle different situations. Overall, the support and guidance that I received at Dynamic Driving were exceptional, and I now feel confident and prepared as a new driver.`,
  },
];

const ReviewsSection = () => {
  const renderedContent = studentReviewsCards.map(
    ({ name, profileImage, starRating, review }, index) => {
      return (
        <article className="card" key={index}>
          <div className="header">
            <div className="student-details">
              <span className="image-container">
                <img src={profileImage.src} alt={profileImage.alt} />
              </span>
              <div className="text-container">
                <h3>{name}</h3>
                <div className="rating">
                  Rating: <span>{starRating}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="main-content">
            <p>{review}</p>
          </div>
        </article>
      );
    }
  );

  return (
    <div className="reviews-content">
      <h2>Student Reviews</h2>
      <div className="main-content">
        <Carousel items={studentReviewsCards}>{renderedContent}</Carousel>
      </div>
      <PageLink toPage={'reviews'} name={'See All Reviews'} />
    </div>
  );
};

export default ReviewsSection;
