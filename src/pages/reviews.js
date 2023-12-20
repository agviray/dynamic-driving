import React from 'react';
import Layout from '../components/Layout';
import PageTemplate from '../templates/page-template';
import StarRating from '../components/StarRating';
import PageExternalLink from '../components/PageExternalLink';

const reviews = [
  {
    name: 'Obim O.',
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
  {
    name: 'G.P.',
    location: {
      area: '',
      city: 'Houston, ',
      state: 'TX',
    },
    date: '7/27/2023',
    rating: '5',
    reviewText: [
      `Mr. Calvin was exceptionally nice and very easy to work with! We called and he answered immediately and was able to get my daughter set up for an appointment to do her driving test right away. Location was easy to find and Mr. Calvin was very clear on instructions and required paperwork. I highly recommend Dynamic Driving!`,
    ],
  },
  {
    name: 'Allie S.',
    location: {
      area: '',
      city: 'Sugar Land, ',
      state: 'TX',
    },
    date: '7/10/2023',
    rating: '5',
    reviewText: [
      `Calvin offers private 2 hr driving lessons. It's a much more efficient use of time and you don't have to ride in a car with other new drivers. He is very patient and had easy to follow tips for difficult maneuvers like parallel parking and not drifting to one side. I would highly recommend this driving school.`,
    ],
  },
  {
    name: 'Sydney B.',
    location: {
      area: '',
      city: 'Houston, ',
      state: 'TX',
    },
    date: '3/28/2023',
    rating: '5',
    reviewText: [
      `Calvin has been wonderful! My daughter needed help refining her skills, highway driving and just being comfortable behind the wheel. Calvin was easy to communicate with and we are looking forward to having our son drive with him when he gets his permit this summer.`,
    ],
  },
  {
    name: 'Ruth O.',
    location: {
      area: '',
      city: 'Houston, ',
      state: 'TX',
    },
    date: '3/6/2023',
    rating: '5',
    reviewText: [
      `This was the best driving test experience I had with my 3 kiddos.`,
      `My older 2 kids tested at places that were not customer friendly at all. The other testing places made the paperwork process much more difficult than necessary. The other 2 places made the driving test less than comfortable for the student.`,
      `I was happy to find Calvin. He made my daughter feel comfortable during her driving test. He help navigate the paperwork prior to our test to ensure we had what we needed. I highly recommend Calvin and his driving school.`,
    ],
  },
  {
    name: 'Ruth K.',
    location: {
      area: '',
      city: 'Houston, ',
      state: 'TX',
    },
    date: '8/30/2022',
    rating: '5',
    reviewText: [
      'Calvin from Dynamic Driving helped my daughter feel comfortable behind the wheel and gain a lot of confidence. She also found Calvin personable and relateable. I also feel comfortable and confident about her driving knowing that she has increased her skill level.',
    ],
  },
];
const Reviews = () => {
  const renderedContent = reviews.map(
    ({ name, location, date, rating, reviewText }, index) => {
      return (
        <article key={index} className="card">
          <div className="header">
            <div className="reviewer-details">
              <h3>{name}</h3>
              <div className="location">
                {location.area !== '' ? <span>{location.area}</span> : null}
                <span>{location.city}</span>
                <span>{location.state}</span>
              </div>
              <div className="rating-date">
                <div className="rating">
                  <StarRating
                    rating={rating}
                    containerColor={index % 2 !== 0 ? '#ffffff' : '#f5f9fc'}
                  />
                </div>
                <div className="date">{date}</div>
              </div>
            </div>
          </div>
          <div className="main-content">
            <div className="paragraph-group">
              {reviewText.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>
        </article>
      );
    }
  );
  return (
    <Layout>
      <PageTemplate>
        <div className="reviews-page">
          <section>
            <div className="reviews-hero">
              <div className="page-heading-content">
                <h2>Reviews</h2>
                <div className="description">
                  <p>See what our students have to say about us!</p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="main-content">
              <div className="paragraph-group">
                <p>
                  Take a look at firsthand accounts from our students and
                  discover stories of triumph, gain insights into our
                  instructors' expertise, and explore the unique features that
                  set Dynamic Driving apart.
                </p>
                <p>
                  Check us out on{' '}
                  <a
                    href="https://www.yelp.com/biz/dynamic-driving-houston"
                    target="_blank"
                  >
                    <span className="special-inline">Yelp</span>
                  </a>{' '}
                  too!
                </p>
              </div>
              <div className="reviews">{renderedContent}</div>
              <PageExternalLink
                toPage={'https://www.yelp.com/biz/dynamic-driving-houston'}
                name={'View All Yelp Reviews'}
              />
            </div>
          </section>
        </div>
      </PageTemplate>
    </Layout>
  );
};

export default Reviews;
