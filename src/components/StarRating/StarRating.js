import React from 'react';
import './StarRating.css'; 


const StarRating = ({rating}) => {
    const fullStars = Math.floor(rating); // Get the whole number part (e.g., 4 for 4.5)
    const halfStars = rating % 1 >= 0.5 ? 1 : 0; // Check if it's .5 or greater for half star
    const emptyStars = 5 - fullStars - halfStars; // Remaining stars will be empty
  
    return (
      <div className="star-rating">
        {/* Full stars */}
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="star full">★</span>
        ))}
        {/* Half star */}
        {halfStars > 0 && <span className="star half">★</span>}
        {/* Empty stars */}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="star empty">★</span>
        ))}
      </div>
    );
  };
  
 
export default StarRating;