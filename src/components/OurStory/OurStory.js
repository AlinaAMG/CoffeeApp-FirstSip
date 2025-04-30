import React from 'react';
import { Link } from 'react-router-dom';
import './OurStory.css';
import cofeeImage from './img/coffeebeans.png';
import farmImg from './img/coffeefarm.png';
import video from './video/coffee-beans.mp4';

const OurStory = () => {
  return (
    <div className="main-page">
      <section className="story-section">
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
            At{' '}
            <Link className="story-name" to="/">
              FIRST SIP
            </Link>
            , we believe that great coffee starts with a great story. Our
            journey began with a simple but powerful vision: to bring the world
            the finest organic coffee, while making a real difference in the
            lives of the farmers who grow it. For us, it's not just about
            providing our customers with premium, ethically sourced coffee; it's
            about supporting the people who make it possible.</p><p> Coffee farmers
            around the world face countless challenges—climate change, economic
            instability, and changing market conditions—all of which have a
            direct impact on their ability to grow the quality coffee beans we
            cherish.Through each cup of coffee, we invite you to join us on this journey of discovery—of flavor, of connection, and of making a positive impact. Together, we can create a ripple effect that extends far beyond the coffee itself, building a better world for farmers, consumers, and communities around the globe.


          </p>
        </div>
        <div className="story-card">
          <img src={cofeeImage} alt="Our Story" />
        </div>
      </section>

      <section className="story-section reverse">
        <div className="story-card">
          <div className="video-wrapper">
            <video width="90%" height="500" autoPlay muted loop playsInline>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="story-text">
          <h2>Our Commitment to Quality</h2>
          <p>
            We're passionate about quality—both in the beans we source and the
            people we work with. Our coffee is 100% organic, grown in rich,
            nutrient-dense soil where nature and tradition come together. We
            work with farmers who share our vision for sustainability, ensuring
            that every bean we bring to you is of the highest standard. From
            small, family-run farms to large cooperatives, each batch of coffee
            we select is carefully chosen, roasted to perfection, and delivered
            to your cup with love and care.
          </p>
          <p> But our commitment to quality goes beyond just the beans. It's about the entire process—from farm to cup. We prioritize direct relationships with our farmers, ensuring transparency and fair trade practices that benefit everyone involved. We believe in empowering farmers with the tools and knowledge they need to grow better coffee while fostering a deep respect for the environment. Through these partnerships, we can help improve not just the quality of the coffee but also the livelihoods of the communities that depend on it. </p>
        </div>
      </section>

      <section className="story-section">
        <div className="story-text">
          <h2>Farming Through Crisis</h2>
          <p>
            The effects of climate change have been devastating for coffee
            growers worldwide. Unpredictable weather patterns, droughts, and
            erratic rainfall are making it harder for farmers to maintain their
            crops and livelihoods.
            <p>
              In a world where many industries cut corners to save costs, we
              stand by the principles of fairness, transparency, and
              responsibility. We know that the best coffee is grown when the
              earth is treated with respect and the people behind the beans are
              valued.
            </p>
          </p>
        </div>
        <div className="story-card">
          <img src={farmImg} alt="Farming Through Crisis" />
        </div>
      </section>
    </div>
  );
};

export default OurStory;
