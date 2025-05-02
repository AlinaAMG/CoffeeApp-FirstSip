import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShippingFast, FaLeaf, FaAward } from 'react-icons/fa';
import "./ChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us py-5">
      <div className="container text-center">
        <h2 className="mb-4">Why People Choose Us</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <FaShippingFast size={40} className="mb-2 icon" />
            <h5>Free Delivery</h5>
            <p>We offer fast & free delivery from €39.99 across the country.</p>
          </div>
          <div className="col-md-4 mb-4">
            <FaLeaf size={40} className="mb-2 icon" />
            <h5>Organic & Sustainable</h5>
            <p>Enjoy our organic coffee beans grown with respect for nature.</p>
          </div>
          <div className="col-md-4 mb-4">
            <FaAward size={40} className="mb-2 icon" />
            <h5>Top Quality</h5>
            <p>Premium beans selected by world-class experts for every roast.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
