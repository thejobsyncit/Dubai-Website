import React from 'react';
import Hero from '../components/Hero';
import RecruitmentCategories from '../components/RecruitmentCategories';
import AboutFeature from '../components/AboutFeature';
import WhyChooseUs from '../components/WhyChooseUs';
import BlogSection from '../components/BlogSection';

const Home = () => {
  return (
    <>
      <Hero />
      <RecruitmentCategories />
      <AboutFeature />
      <WhyChooseUs />
      <BlogSection />
    </>
  );
};

export default Home;
