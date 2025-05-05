import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import './AllCoffees.css';
import coffeeImage from './img/coffeeBag.png';
import coffeeHover from './img/coffeemock.png';

function AllCoffees() {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
   const navigate = useNavigate(); 

  useEffect(() => {
    axios
      .get('http://localhost:4001/api/coffees/all-coffees')
      .then((res) => {
        console.log(res.data);
        setCoffees(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log('Error fetching coffee data:', err);
        setError('Error fetching coffee data');
        setLoading(false);
      });
  }, []);

  const getCoffeeByCategory = (coffee) => {
    if (coffee.includes('single-origin')) return 'Single Origin';
    if (coffee.includes('organic')) return 'Organic';
    if (coffee.includes('premium-blends')) return 'Premium Blends';
    return 'All Coffees';
  };

  const category = getCoffeeByCategory(location.pathname);

  const filteredCoffees =
    category === 'All Coffees'
      ? coffees
      : coffees.filter((coffee) => coffee.category === category);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Function to handle the redirection
  const redirectToDetails = (coffeeId) => {
    // Redirect the user to the coffee details page
    navigate(`/shop/${coffeeId}`); 
  };

  return (
    <div className="container" >
      <h2>Coffee List</h2>
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
              {coffee.description.split(' ').slice(0, 5).join(' ')}<Link className="read-more" to={`/shop/${coffee._id}`}><i className="bi bi-arrow-right"></i></Link>
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
