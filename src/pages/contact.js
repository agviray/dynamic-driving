import React from 'react';
import Layout from '../components/Layout';
import PageTemplate from '../templates/page-template';

const Contact = () => {
  return (
    <Layout>
      <PageTemplate>
        <section>
          <div className="contact-hero">
            <div className="page-heading-content">
              <h2>Contact Hero</h2>
              <p>This is the contact page!</p>
            </div>
          </div>
        </section>
        <section>
          <h2>Contact</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            aperiam explicabo numquam nisi tenetur quidem atque voluptate
            consectetur praesentium laborum!
          </p>
        </section>
      </PageTemplate>
    </Layout>
  );
};

export default Contact;
