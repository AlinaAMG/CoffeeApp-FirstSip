import React from 'react';
import './HeroSection.css';
import coffeeImage from './img/coffee.png';
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Welcome to First Sip Coffee</h1>
        <p>Your perfect coffee, just a click away.</p>
        <button className="cta-button">
          <img
            src={coffeeImage}
            alt="Coffee Logo"
            className="cta-button-icon"
          />
         <Link className="shop" to="/shop/all-coffees">Shop Now</Link>
         </button>
      
      </div>
    </section>
  );
};

export default HeroSection;
