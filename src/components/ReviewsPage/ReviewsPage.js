import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './ReviewsPage.css';

const ReviewsPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(1);
  const [message, setMessage] = useState('');

  // Fetch testimonials from the backend when the component mounts
  useEffect(() => {
    axios
      .get('http://localhost:4001/api/testimonials')
      .then((response) => {
        setTestimonials(response.data); // Store fetched testimonials
      })
      .catch((error) => {
        console.error('Error fetching testimonials:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the backend via POST request
    axios
      .post('http://localhost:4001/api/testimonials', {
        author,
        text,
        rating,
        verified: false,
      })
      .then((response) => {
        setMessage('Review added successfully!');
        setAuthor('');
        setText('');
        setRating(1);
        setTestimonials([response.data, ...testimonials]);
        setTimeout(() => {
          setMessage('');
        }, 3000);
      })

      .catch((error) => {
        setMessage('Error submitting testimonial!');
        console.error('Error:', error);
        setTimeout(() => {
          setMessage('');
        }, 3000);
      });
  };

  // Function to render star rating
  const renderStars = (rating) => {
    let stars = [];
    // Create 5 stars based on the rating
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <span key={i} className="star filled">
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="star empty">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div className="testimonials-page">
      <div className="testimonial-form-section">
        <div className="form-container">
          <h2>Add a Review</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Your Name"
              required
            />
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Your Testimonial"
              required
              rows="5"
            ></textarea>
            <div className="rating-section">
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              >
                {[1, 2, 3, 4, 5].map((r) => (
                  <option key={r} value={r}>
                    {r} Star{r > 1 && 's'}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="submit-btn">
              Submit Review
            </button>
          </form>
          {message && (
            <div
              className={
                message === 'Review added successfully!'
                  ? 'success-message'
                  : 'error-message'
              }
            >
              {message}
            </div>
          )}
        </div>
      </div>

      {/* Display Testimonials Section */}
      <div className="testimonials-grid">
        <h2>Customer Reviews</h2>
        <div className="grid-container">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial._id}
              className={`testimonial-card ${index % 2 === 0 ? 'even' : 'odd'}`}
            >
              <div className="testimonial-header">
                <div className="user-info">
                  <img
                    src="https://www.w3schools.com/w3images/avatar2.png"
                    alt="User Avatar"
                    className="user-avatar"
                  />
                </div>
                <div className="author">{testimonial.author}</div>
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="rating">{renderStars(testimonial.rating)}</div>
              <div className="date">
                {new Date(testimonial.date).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
