import React from 'react';
import Layout from '../components/Layout';
import PageTemplate from '../templates/page-template';
import Breadcrumbs from '../components/Breadcrumbs';

const About = ({ location }) => {
  return (
    <Layout>
      <PageTemplate>
        <div className="about-page">
          <section>
            <div className="about-hero">
              <div className="page-heading-content">
                <h2>About</h2>
                <div className="description">
                  <p>
                    We'll teach you the right skills so you can drive safely,
                    with confidence.
                  </p>
                </div>
                {/* <Breadcrumbs currentPage={location} /> */}
              </div>
            </div>
          </section>
          <section>
            <div className="main-content">
              <div className="paragraph-group">
                <p>
                  At <span>Dynamic Driving</span>, we believe that safe and
                  confident driving is the key to unlocking a world of
                  possibilities on the road. Our mission is to create
                  responsible and skilled drivers, and we are committed to
                  providing top-notch driving education that goes beyond the
                  basics.
                </p>
                <p>
                  We understand that learning to drive is a significant
                  milestone in one's life. With this in mind, our team of
                  experienced and certified instructors are dedicated to
                  fostering a positive and supportive learning environment.
                </p>
                <p>
                  Whether you are getting behind the wheel for the first time or
                  seeking to enhance your existing skills, we tailor our lessons
                  to meet your individual needs.
                </p>
              </div>
            </div>
          </section>
        </div>
      </PageTemplate>
    </Layout>
  );
};

export default About;
