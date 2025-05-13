import React from 'react';
import HeroSection from "../components/HeroSection/HeroSection"; 
import WhyChooseUs from './ChooseUs/ChooseUs';
import BestSellers from './BestSellers/BestSellers';
import Reviews from './DisplayReviews/Reviews';
import DidYouKnow from './DidYouKnow/DidYouKnow';



const Home = () => {
  return (
    <div>
      <HeroSection />  
      <DidYouKnow/>
      <BestSellers/>
      <Reviews/>
      <WhyChooseUs />
    
    </div>
  );
};

export default Home;