import React from 'react';
import { Link } from "react-router-dom";
import './OurStory.css';
import cofeeImage from './img/coffeebeans.png';
import farmImg from './img/coffeefarm.png';
import img from './img/cof.png';

const OurStory = () => {
  return (
    <div className="main-page">
      <section className="story-section">
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
            At <Link className="story-name" to="/">FIRST SIP</Link>, we believe that great coffee starts with a great
            story. Our journey began with a simple but powerful vision: to bring
            the world the finest organic coffee, while making a real difference
            in the lives of the farmers who grow it. For us, it's not just about
            providing our customers with premium, ethically sourced coffee; it's
            about supporting the people who make it possible. Coffee farmers
            around the world face countless challenges—climate change, economic
            instability, and changing market conditions—all of which have a
            direct impact on their ability to grow the quality coffee beans we
            cherish.
          </p>
        </div>
        <div className="story-card">
          <img src={cofeeImage} alt="Our Story" />
          <div className="card-description">
            <p>
              Our journey with the farmers and our sustainable practices to
              support them.
            </p>
          </div>
        </div>
      </section>

      <section className="story-section reverse">
        <div className="story-card">
          <img src={img} alt="Our Commitment to Quality" />
          <div className="card-description">
            <p>
              Quality coffee starts with the farmers. We're passionate about
              organic coffee sourced from rich soils.
            </p>
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
          <div className="card-description">
            <p>
              We provide farmers with resources to overcome climate challenges.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
