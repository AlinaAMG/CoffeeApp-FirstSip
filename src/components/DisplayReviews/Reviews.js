import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Reviews.css'; // Import custom CSS
import "./Reviews.css";

const Reviews = () => {
  const [testimonials, setTestimonials] = useState([]);

  // Fetch testimonials data from the backend
  useEffect(() => {
    axios
      .get("http://localhost:4001/api/testimonials")
      .then((response) => {
        console.log(response.data); 
        setTestimonials(response.data); 
      })
      .catch((error) => {
        console.error("Error fetching testimonials:", error);
      });
  }, []);

  // Function to render star rating
  const renderStars = (rating) => {
    let stars = [];
    // Create 5 stars based on the rating
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="star filled">★</span>); // filled star
      } else {
        stars.push(<span key={i} className="star empty">★</span>); // empty star
      }
    }
    return stars;
  };

  return (
    <div className="reviews-container">
      <h2 className="reviews-header">What Our Customers Say</h2>

      <div className="reviews-grid">
        {/* Display only the first 4 testimonials */}
        {testimonials.slice(0, 4).map((t, i) => (
          <div key={i} className="review-card">
            {/* User Icon */}
            <div className="user-info">
              <img 
                src="https://www.w3schools.com/w3images/avatar2.png" 
                alt="User Avatar" 
                className="user-avatar"
              />
              <div>
                <p className="user-name">{t.author}</p>
                <p className="review-date">{t.date.slice(0, 10)}</p> {/* Display date */}
              </div>
            </div>

            {/* Review text */}
            <p className="review-text">"{t.text}"</p>

            {/* Star Rating */}
            <div className="star-rating">
              {renderStars(t.rating)} {/* Render star rating */}
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow Link to View All Reviews */}
      <div className="read-more-link">
        <Link
          to="/reviews"
          className="read-more-button"
        >
          Read more reviews →
              </Link>
             
      </div>
    </div>
  );
};

export default Reviews;