import React from 'react';
import Layout from '../components/Layout';
import HeroContent from '../components/home/HeroContent';
import WhyContent from '../components/home/WhyContent';
import ServicesContent from '../components/home/ServicesContent';

const Home = () => {
  return (
    <Layout>
      <section id="hero">
        <HeroContent />
      </section>
      <section id="why">
        <WhyContent />
      </section>
      <section id="services">
        <ServicesContent />
      </section>
    </Layout>
  );
};

export default Home;
