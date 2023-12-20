import React from 'react';
import Carousel from '../Carousel';
import PageLink from '../PageLink';
import StarRating from '../StarRating';
import studentDriver01 from '../../images/student-driver-01.jpg';
import studentDriver02 from '../../images/student-driver-02.jpg';
import studentDriver03 from '../../images/student-driver-03.jpg';

const studentReviewsCards = [
  {
    name: 'Obim O.',
    profileImage: null,
    location: {
      area: 'Downtown, ',
      city: 'Houston, ',
      state: 'TX',
    },
    date: '12/15/2023',
    rating: '5',
    reviewText: [
      `At 23 years old, I took my driving lessons with Calvin. I felt nervous during the first lesson, but with Calvin's help, I became comfortable by the third one and passed my test after the fourth.`,
      `Calvin is nice, patient, calm, conversational, and an overall great guy. I highly recommend!`,
    ],
  },
  {
    name: 'Meghan S.',
    profileImage: null,
    location: {
      area: '',
      city: 'Austin, ',
      state: 'TX',
    },
    date: '10/6/2023',
    rating: '5',
    reviewText: [
      `Calvin was so knowledgeable!! As a busy Mom, navigating this process was daunting. Worth every penny!! He made it so easy. Did parent taught and private lesson with official driving test - felt so concierge style. Highly recommend!`,
    ],
  },
  {
    name: 'Betsy G.',
    profileImage: null,
    location: {
      area: 'The Heights, ',
      city: 'Houston, ',
      state: 'TX',
    },
    date: '9/18/2023',
    rating: '5',
    reviewText: [
      `Highly recommend! My son did a private two hour lesson with my son and then also performed his road test. Calvin has great positive energy, I felt more than comfortable having my son driving around alone with him, and his communication/scheduling was super easy and accomodating. We have shared his information with all our friends and will be back for our second child for sure. Thank you for such a positive experience!`,
    ],
  },
];

const ReviewsSection = () => {
  const renderedContent = studentReviewsCards.map(
    ({ name, location, profileImage, date, rating, reviewText }, index) => {
      return (
        <article className="card" key={index}>
          <div className="header">
            <div className="student-details">
              {profileImage ? (
                <span className="image-container">
                  <img src={profileImage.src} alt={profileImage.alt} />
                </span>
              ) : null}
              <div className="text-container">
                <h3>{name}</h3>
                <div className="location">
                  {location.area !== '' ? <span>{location.area}</span> : null}
                  <span>{location.city}</span>
                  <span>{location.state}</span>
                </div>
                <div className="rating-date">
                  <StarRating rating={rating} containerColor={'#fff'} />
                  <div className="date">{date}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-content">
            <p>{reviewText}</p>
          </div>
        </article>
      );
    }
  );

  // const

  return (
    <div className="reviews-content">
      <h2>Student Reviews</h2>
      <div className="main-content">
        <div className="mobile-content">
          <Carousel items={studentReviewsCards}>{renderedContent}</Carousel>
        </div>
        <div className="desktop-content">
          <div>{renderedContent}</div>
        </div>
      </div>
      <PageLink toPage={'reviews'} name={'See All Reviews'} />
    </div>
  );
};

export default ReviewsSection;
