import React from 'react';
import Layout from '../components/Layout';
import characters from '../images/characters.png';

const Home = () => {
  return (
    <Layout>
      <section>
        <div className="hero">
          <div>
            <h1>
              <span>DYNAMIC DRIVING</span>
              <span>DRIVING SCHOOL</span>
            </h1>
            <div className="characters">
              <span>
                <img src={characters} alt="characters" />
              </span>
            </div>
            <div className="book-button">
              <span>Let's Drive!</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
