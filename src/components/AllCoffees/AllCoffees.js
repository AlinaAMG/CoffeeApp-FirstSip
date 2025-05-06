import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './AllCoffees.css';
import coffeeImage from './img/coffeeBag.png';
import coffeeHover from './img/coffeemock.png';
import StarRating from '../StarRating/StarRating';

function AllCoffees() {
  console.log('AllCoffees component loaded');
  const [coffees, setCoffees] = useState([]);
  const [filteredCoffees, setFilteredCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  const navigate = useNavigate();

  // Fetch all coffees on component mount
  useEffect(() => {
    console.log('Fetching coffee data...');

    setLoading(true);
    axios
      .get('http://localhost:4001/api/coffees/all-coffees') // Fetch all coffees
      .then((res) => {
        console.log(res.data);
        setCoffees(res.data);
        setFilteredCoffees(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching coffee data:', err);
        setError('Error fetching coffee data');
        setLoading(false);
      });
  }, []);
  
  const applyFilters = (category, priceRange) => {
    let filtered = coffees;
  
    if (category) {
      filtered = filtered.filter((coffee) => coffee.category === category);
    }
  
    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number);
      filtered = filtered.filter((coffee) => coffee.price >= min && coffee.price <= max);
    }
  
    setFilteredCoffees(filtered);
  };
  
  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setSelectedCategory(selected);
    applyFilters(selected, selectedPriceRange);
  };
  const handlePriceChange = (e) => {
    const selected = e.target.value;
    setSelectedPriceRange(selected);
    applyFilters(selectedCategory, selected);
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
  
      {/* Filters */}
      <div className="filter-container">
        <div className="category-filter1">
          <label className="label">Filter by Category:</label>
          <select id="category-filter" onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            <option value="Single Origin">Single Origin</option>
            <option value="Organic">Organic</option>
            <option value="Premium Blends">Premium Blends</option>
          </select>
        </div>
  
        <div className="price-filter">
          <label className="label">Filter by Price:</label>
          <select id="price-filter" onChange={handlePriceChange}>
            <option value="">All Prices</option>
            <option value="0-20">€0 – €20</option>
            <option value="20-40">€20 – €40</option>
            <option value="40-60">€40 – €60</option>
          </select>
        </div>
      </div>
  
      {/* Coffee Cards */}
      {/* <div className="coffee-cards">
        {filteredCoffees.length === 0 ? (
          <p className="no-results">❌ No coffees found for the selected category and price range.</p>
        ) : (
          filteredCoffees.map((coffee) => (
            <div key={coffee._id} className="coffee-card">
              <Link to={`/shop/${coffee._id}`}>
                <div className="image-container">
                  <img src={coffeeImage} alt={coffee.name} className="default-img" />
                  <img src={coffeeHover} alt={coffee.name} className="hover-img" />
                </div>
              </Link>
              <h2 className="title">{coffee.name}</h2>
              <p><strong>Category: </strong>{coffee.category}</p>
              <p><strong>Price:</strong> &euro;{coffee.price}</p>
              <div className="coffee-rating">
              <StarRating rating={coffee.rating} />
            </div>

              <p className="description">
                <strong>Description:</strong> {coffee.description.split(' ').slice(0, 5).join(' ')}
                <Link className="read-more" to={`/shop/${coffee._id}`}>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </p>
              <button className="btn-all-coffees" onClick={() => redirectToDetails(coffee._id)}>
                Add To Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}   */}
      <div className="coffee-cards">
  {filteredCoffees.length === 0 ? (
    <p className="no-results">❌ No coffees found for the selected category and price range.</p>
  ) : (
    filteredCoffees.map((coffee) => (
      <div key={coffee._id} className="coffee-card">
        <Link to={`/shop/${coffee._id}`}>
          <div className="image-container">
            <img src={coffeeImage} alt={coffee.name} className="default-img" />
            <img src={coffeeHover} alt={coffee.name} className="hover-img" />
          </div>
        </Link>
        <h2 className="title">{coffee.name}</h2>
        <p><strong>Category: </strong>{coffee.category}</p>
        <p><strong>Price:</strong> &euro;{coffee.price}</p>
        <div className="coffee-rating">
          <StarRating rating={coffee.rating} />
        </div>

        <p className="description">
          <strong>Description:</strong> {coffee.description.split(' ').slice(0, 5).join(' ')}
          <Link className="read-more" to={`/shop/${coffee._id}`}>
            <i className="bi bi-arrow-right"></i>
          </Link>
        </p>

     {/* This overlay should only be inside each individual card */}
  {coffee.soldOut && (
    <div className="sold-out-overlay">
      <span>Sold Out</span>
    </div>
  )}

  {/* Button is shown only if not sold out */}
  {!coffee.soldOut && (
    <button className="btn-all-coffees" onClick={() => redirectToDetails(coffee._id)}>
      Add To Cart
    </button>
  )}
</div>
    ))
  )}
 </div>
    </div>
  );
}   
      
      

export default AllCoffees;
