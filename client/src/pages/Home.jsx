import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import AboutFeature from '../components/AboutFeature';
import ServicesCards from '../components/ServicesCards';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutFeature />
      <ServicesCards />
    </>
  );
};

export default Home;
