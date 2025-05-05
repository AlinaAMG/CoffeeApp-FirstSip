import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './AllCoffees.css';
import coffeeImage from './img/coffeeBag.png';
import coffeeHover from './img/coffeemock.png';

function AllCoffees() {
  console.log("AllCoffees component loaded");
  const [coffees, setCoffees] = useState([]);
  const [filteredCoffees, setFilteredCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(""); 
  const navigate = useNavigate();

// Fetch all coffees on component mount
useEffect(() => {
  console.log("Fetching coffee data...");

  setLoading(true);
  axios
    .get("http://localhost:4001/api/coffees/all-coffees") // Fetch all coffees
    .then((res) => {
      console.log(res.data);
      setCoffees(res.data); 
      setFilteredCoffees(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error fetching coffee data:", err);
      setError("Error fetching coffee data");
      setLoading(false);
    });
}, []);

// Handle category selection
const handleCategoryChange = (e) => {
  const selected = e.target.value;
  setSelectedCategory(selected);

  // Filter coffees based on the selected category
  if (selected === "") {
    setFilteredCoffees(coffees); 
  } else {
    const filtered = coffees.filter((coffee) => coffee.category === selected);
    setFilteredCoffees(filtered);
  }
};

if (loading) return <p>Loading...</p>;
if (error) return <p>{error}</p>;

// Function to handle the redirection to coffee details
const redirectToDetails = (coffeeId) => {
  navigate(`/shop/${coffeeId}`);
};


  return (
    <div className="container">
      <h2>Coffee List</h2>
      
      {/* Category Dropdown */}
      <div className='filter-container'>
        <label className='label'>Filter by Category: </label>
        <select id="category-filter" onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="Single Origin">Single Origin</option>
          <option value="Organic">Organic</option>
          <option value="Premium Blends">Premium Blends</option>
        </select>
      </div>
      <div className="coffee-cards">
        {filteredCoffees.map((coffee) => (
          <div key={coffee._id} className="coffee-card">
            <Link to={`/shop/${coffee._id}`}>
              <div className="image-container">
                <img
                  src={coffeeImage}
                  alt={coffee.name}
                  className="default-img"
                />
                <img
                  src={coffeeHover}
                  alt={coffee.name}
                  className="hover-img"
                />
              </div>
            </Link>
            <h2 className="title">{coffee.name}</h2>
            <p>
              <strong>Category: </strong>
              {coffee.category}
            </p>
            <p>
              <strong>Price:</strong> &euro;{coffee.price}
            </p>
            <p>
              <strong>Rating:</strong> {coffee.rating} / 5
            </p>

            <p className="description">
              <strong>Description:</strong>{' '}
              {coffee.description.split(' ').slice(0, 5).join(' ')}
              <Link className="read-more" to={`/shop/${coffee._id}`}>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </p>
            <button
              className="btn-all-coffees"
              onClick={() => redirectToDetails(coffee._id)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCoffees;
