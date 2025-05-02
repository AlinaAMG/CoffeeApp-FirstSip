import React from 'react';
import HeroSection from "../components/HeroSection/HeroSection"; 
import WhyChooseUs from './ChooseUs/ChooseUs';
import BestSellers from './BestSellers/BestSellers';

const Home = () => {
  return (
    <div>
      <HeroSection />  
      <BestSellers/>
     
      <WhyChooseUs />
    
    </div>
  );
};

export default Home;