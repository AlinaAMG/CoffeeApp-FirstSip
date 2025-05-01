import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useParams } from 'react-router-dom';
import './AllCoffees.css';
import coffeeImage from './img/coffeeBag.png';
import coffeeHover from './img/coffeemock.png';
import { useLocation } from 'react-router-dom';

function AllCoffees() {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    const location = useLocation();
    const { id } = useParams();

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

  return (
    <div className="container">
      <h1>Coffee List</h1>
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
              <strong>Price:</strong> ${coffee.price}
            </p>
            <p>
              <strong>Rating:</strong> {coffee.rating} / 5
                </p>
            
            <p className="description">
              <strong>Description:</strong>{' '}
              {coffee.description.split(' ').slice(0, 12).join(' ')}
            </p>
            <Link className="btn-all-coffees" to="/cart">
              Add To Cart
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCoffees;
