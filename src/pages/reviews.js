import React from 'react';
import Layout from '../components/Layout';
import PageTemplate from '../templates/page-template';

const Reviews = () => {
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
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur magnam vitae repellat quas dolore, cum corrupti
                amet, atque porro adipisci magni neque odio, sapiente
                repudiandae suscipit optio ducimus doloremque sint. Fugit magni
                libero atque vero laudantium eum, culpa ipsum unde!
              </p>
            </div>
          </section>
        </div>
      </PageTemplate>
    </Layout>
  );
};

export default Reviews;
