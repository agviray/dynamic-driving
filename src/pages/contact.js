import React from 'react';
import Layout from '../components/Layout';
import PageTemplate from '../templates/page-template';
import Map from '../components/Map';
import phoneIcon from '../images/icons/phone-icon.png';
import emailIcon from '../images/icons/email-icon.png';

const operationalHoursDetails = [
  {
    day: `Mon`,
    hours: `9:00AM - 7:00PM`,
  },
  {
    day: `Tue`,
    hours: `9:00AM - 7:00PM`,
  },
  {
    day: `Wed`,
    hours: `9:00AM - 7:00PM`,
  },
  {
    day: `Thu`,
    hours: `9:00AM - 7:00PM`,
  },
  {
    day: `Fri`,
    hours: `9:00AM - 7:00PM`,
  },
  {
    day: `Sat`,
    hours: `9:00AM - 7:00PM`,
  },
  {
    day: `Sun`,
    hours: `9:00AM - 7:00PM`,
  },
];

const Contact = () => {
  return (
    <Layout>
      <PageTemplate>
        <div className="contact-page">
          <section>
            <div className="contact-hero">
              <div className="page-heading-content">
                <h2>Contact</h2>
                <div className="description">
                  <div className="paragraph-group">
                    <p>
                      Have a question? Ready to begin? Give us a shout. We're
                      glad to help.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="main-content">
              <article>
                <div className="info">
                  <h2>Let's Connect</h2>
                  <div className="inner-container">
                    <p>
                      Your journey to becoming a confident and skilled driver
                      begins here! Get started by giving us a call or sending us
                      an email.
                    </p>
                    <div className="contact">
                      <h3>Contact</h3>
                      <div>
                        {/* <span className="icon-container">
                          <img src={emailIcon} alt="Email icon" />
                        </span> */}
                        <a
                          href="mailto:dynamic.driving.houston@gmail.com"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <span>dynamic.driving.houston@gmail.com</span>
                        </a>
                      </div>
                      <div>
                        {/* <span className="icon-container">
                          <img src={phoneIcon} alt="Phone icon" />
                        </span> */}
                        <span>(832) 859 - 2519</span>
                      </div>
                    </div>
                    {/* <div className="social">
                      <ul></ul>
                    </div> */}
                    <div className="address">
                      <h3>Address</h3>
                      <div>
                        <span>9730 Town Park Dr. Suite #95</span>
                        <span>Houston, TX 77036</span>
                      </div>
                      <div className="hours-of-operation">
                        <p className="note">Note: Holiday hours may vary.</p>
                        <ul>
                          {operationalHoursDetails.map(
                            ({ day, hours }, index) => {
                              return (
                                <li key={index}>
                                  <span>{day}</span>
                                  <span>{hours}</span>
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article>
                <div className="map-container">
                  <Map />
                </div>
              </article>
            </div>
          </section>
        </div>
      </PageTemplate>
    </Layout>
  );
};

export default Contact;
