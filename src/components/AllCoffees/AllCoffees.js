import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './AllCoffees.css';
import coffeeImage from './img/coffeeBag.png';
import coffeeHover from './img/koffie-b.png';
import StarRating from '../StarRating/StarRating';
import Select from 'react-select';

function AllCoffees() {
  console.log('AllCoffees component loaded');
  const [coffees, setCoffees] = useState([]);
  const [filteredCoffees, setFilteredCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [selectedCountryOption, setSelectedCountryOption] = useState(null);
  const [region, setRegion] = useState('');
  const navigate = useNavigate();


  const countryOptions = [
    { value: '', label: 'All Countries' },
    { value: 'Indonesia', label: 'Indonesia' },
    { value: 'Ethiopia', label: 'Ethiopia' },
    { value: 'Brazil', label: 'Brazil' },
    { value: 'Colombia', label: 'Colombia' },
    { value: 'Costa Rica', label: 'Costa Rica' },
  ];

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

 
  // Fetching coffees by the region
  useEffect(() => {
    setLoading(true);

    const url = region
      ? `http://localhost:4001/api/coffees/${region}`
      : `http://localhost:4001/api/coffees/all-coffees`;
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setCoffees(response.data);
        setFilteredCoffees(response.data);
        setLoading(false);
      })
      .catch((err) => console.log('Error fetching data:', err));
  }, [region]);

  const applyFilters = () => {
    let filtered = coffees;

    if (selectedCategory) {
      filtered = filtered.filter(
        (coffee) => coffee.category === selectedCategory
      );
    }

    if (selectedPriceRange) {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      filtered = filtered.filter(
        (coffee) => coffee.price >= min && coffee.price <= max
      );
    }

    if (searchTerm) {
      filtered = filtered.filter((coffee) =>
        coffee.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredCoffees(filtered);
  };
  useEffect(() => {
    applyFilters();
  }, [searchTerm, selectedCategory, selectedPriceRange]);

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setSelectedCategory(selected);
    // applyFilters(selected, selectedPriceRange);
  };

  const handlePriceChange = (e) => {
    const selected = e.target.value;
    setSelectedPriceRange(selected);
    // applyFilters(selectedCategory, selected);
  };
//  Add styles to the Select 
  const customSelectStyles = {
 control: (provided, state) => ({
      ...provided,
  
    borderRadius: '20px',
    borderColor: state.isFocused ? '#8b5e3c;' : '#8b5e3c', 
    boxShadow: state.isFocused ? '0 0 4px rgba(139, 94, 60, 0.5)' : 'none',
    backgroundColor: "#f5f0e6",
    color: "#4b2e2a",
    cursor: "pointer",
    minHeight: '42px',
    '&:hover': {
      borderColor: '#c2956a', // border on hover
    },
  }),
    
  placeholder: (provided) => ({
    ...provided,
  color: "#4b2e2a",
   
    }),
   menu: (provided) => ({
    ...provided,
    backgroundColor: '#f5f0e6', // Your desired background
    borderRadius: '10px',
    marginTop: '4px',
    zIndex: 5,
    }),
   option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? '#0d6efd' 
      : state.isFocused
      ? '  #0d6efd' 
      : '#f5f0e6', // default background
     color: state.isSelected? "#fff":state.isFocused?"#fff":"#4b2e2a",
    cursor: 'pointer',
    padding: '10px 12px',
  }),
}

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setSearchTerm(searchInput); // ✅ triggers useEffect
      setSearchInput(''); // ✅ clears the field
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Function to handle the redirection to coffee details
  const redirectToDetails = (coffeeId) => {
    navigate(`/shop/${coffeeId}`);
  };

  return (
    <div className="container" style={{ backgroundColor: '#fff' }}>
      <div className="search-container">
      
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search by coffee name..."
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleSearchKeyDown}
          className="search-input"
        />
      </div>
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
        {/* Filter by the country of region */}
        <div className="region-filter">
              <label className="label">Filter by Country:</label>
          <Select
            styles={customSelectStyles}
            options={countryOptions}
            value={selectedCountryOption}
            onChange={(selectedOption) => {
            setSelectedCountryOption(selectedOption);
            setRegion(selectedOption?.value || '')
            }
            }
            placeholder="Select a country..."
          />
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

      <div className="coffee-cards">
        {filteredCoffees.length === 0 ? (
          <p className="no-results">
            ❌ No coffees found for the selected category and price range.
          </p>
        ) : (
          filteredCoffees.map((coffee) => (
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
              <div className="coffee-rating">
                <StarRating rating={coffee.rating} />
              </div>

              <p className="description">
                <strong>Description:</strong>{' '}
                {coffee?.description?.split(' ').slice(0, 5).join(' ')}
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
                <button
                  className="btn-all-coffees"
                  onClick={() => redirectToDetails(coffee._id)}
                >
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
