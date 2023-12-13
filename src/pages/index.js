import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/home/HeroSection';
import WhySection from '../components/home/WhySection';
import ServicesSection from '../components/home/ServicesSection';
import ReviewsSection from '../components/home/ReviewsSection';

const Home = () => {
  return (
    <Layout>
      <div className="home-page">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="why">
          <WhySection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="reviews">
          <ReviewsSection />
        </section>
      </div>
    </Layout>
  );
};

export default Home;
