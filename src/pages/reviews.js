import React from 'react';
import Layout from '../components/Layout';
import PageTemplate from '../templates/page-template';

const Reviews = () => {
  return (
    <Layout>
      <PageTemplate>
        <section>
          <div className="reviews-hero">
            <div className="page-heading-content">
              <h2>Reviews Hero</h2>
              <p>This is the reviews page!</p>
            </div>
          </div>
        </section>
        <section>
          <h2>Reviews</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur magnam vitae repellat quas dolore, cum corrupti amet,
            atque porro adipisci magni neque odio, sapiente repudiandae suscipit
            optio ducimus doloremque sint. Fugit magni libero atque vero
            laudantium eum, culpa ipsum unde!
          </p>
        </section>
      </PageTemplate>
    </Layout>
  );
};

export default Reviews;
