import React from 'react';
import HeroSection from "../components/HeroSection/HeroSection"; 
import WhyChooseUs from './ChooseUs/ChooseUs';
import BestSellers from './BestSellers/BestSellers';
import Reviews from './DisplayReviews/Reviews';

const Home = () => {
  return (
    <div>
      <HeroSection />  
      <BestSellers/>
      <Reviews/>
      <WhyChooseUs />
    
    </div>
  );
};

export default Home;