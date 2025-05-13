import React, { useState, useEffect } from 'react';
import './DidYouKnow.css';

const facts = [
  "Coffee was originally chewed, not sipped.",
  "Brazil is the world's largest coffee producer.",
  "Ethiopia is considered the birthplace of coffee.",
  "Coffee beans are actually seeds of the coffee cherry.",
 "Decaf coffee still contains a small amount of caffeine.",
  "Coffee is rich in antioxidants, which can help improve your heart health, burn fat, and even reduce the risk of certain diseases like Type 2 diabetes and Alzheimer's."
];

const DidYouKnow = () => {
  const [index, setIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % facts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="did-you-know">
          <h2>Did You Know?</h2>
          <p>{facts[index]}</p>
    </div>
  );
};

export default DidYouKnow;
