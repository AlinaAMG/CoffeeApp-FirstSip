import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BestSellers.css';
import { Link } from 'react-router-dom';

function BestSellers() {
  const [coffees, setCoffees] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axios
      .get('http://localhost:4001/api/coffees/best-sellers')
      .then((response) => {
        console.log(response.data);
        setCoffees(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching coffee data:', error);
        setLoading(false);
      });
  }, []);
    
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === coffees.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 
  
    return () => clearInterval(interval); // cleanup when unmounted
  }, [coffees.length]);
  

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % coffees.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? coffees.length - 1 : prevIndex - 1
    );
  };

  if (loading) return <p>Loading...</p>;
  if (coffees.length === 0) return <p>No coffee data available.</p>;

  const currentCoffee = coffees[currentIndex];

  return (
    <div className="carousel-container">
      <h2>Our Best Sellers</h2>
      <p className="carousel-subtext">
        Discover our handpicked best-selling coffees, freshly roasted and
        delivered to your door.
      </p>

      <button onClick={prevSlide} className="carousel-button prev-button">
        &lt;
      </button>

      <div className="carousel-slide">
        <img src={currentCoffee.imageUrl} alt={currentCoffee.name} />
        <h3>{currentCoffee.name}</h3>
        <p>{currentCoffee.description}</p>
        <p>
          <strong>Price:</strong> €{currentCoffee.price}
        </p>
      </div>

      <button onClick={nextSlide} className="carousel-button next-button">
        &gt;
      </button>
      <Link to={`/shop/${currentCoffee._id}`}>
      <button className="details-button">View Details</button>
    </Link>
    </div>
  );
}

export default BestSellers;
