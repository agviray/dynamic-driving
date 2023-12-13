import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/home/HeroSection';
import WhySection from '../components/home/WhySection';
import ServicesSection from '../components/home/ServicesSection';

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
      </div>
    </Layout>
  );
};

export default Home;
