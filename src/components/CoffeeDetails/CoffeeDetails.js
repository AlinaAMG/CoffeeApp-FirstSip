import './CoffeeDetail.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import coffeeImage from './img/coffeedetails.png';

function CoffeeDetail() {
  const { id } = useParams();
  const [coffee, setCoffee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedWeight, setSelectedWeight] = useState('250g');
  const [selectedRoast, setSelectedRoast] = useState('Light');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:4001/api/coffees/coffee/${id}`)
      .then((res) => {
        setCoffee(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching coffee details:', err);
        setLoading(false);
      });
  }, [id]);

  const handleWeightChange = (e) => setSelectedWeight(e.target.value);
  const handleRoastChange = (e) => setSelectedRoast(e.target.value);
  const handleQuantityChange = (e) => setQuantity(e.target.value);

  const handleAddToCart = () => {
    console.log('Added to cart:', {
      id: coffee._id,
      selectedWeight,
      selectedRoast,
      quantity,
    });
  };

  if (loading) return <p>Loading...</p>;
  if (!coffee) return <p>Coffee not found</p>;

  return (
    <div className="coffee-single-wrapper">
      <div className="coffee-single-container">
        <div className="coffee-single-image-box">
          <img
            src={coffeeImage}
            alt={coffee.name}
            className="coffee-single-image"
          />
        </div>

        <div className="coffee-single-info">
          <h1 className="coffee-single-title">{coffee.name}</h1>
          <p className="coffee-single-description">{coffee.description}</p>
          <p>
            <strong>Notes:</strong> {coffee.notes}
          </p>
          <p>
            <strong>Price:</strong> ${coffee.price}
          </p>
          <p>
            <strong>Category:</strong> {coffee.category}
          </p>
          <p>
            <strong>Rating:</strong> {coffee.rating} / 5
          </p>

          <div className="coffee-single-weight">
            <label>Select Weight: </label>
            <select value={selectedWeight} onChange={handleWeightChange}>
              <option value="choose">Choose an option</option>
              <option value="250g">250g</option>
              <option value="1000g">1000g</option>
            </select>
          </div>

          <div className="coffee-single-roast">
            <label>Select Roast: </label>
            <select value={selectedRoast} onChange={handleRoastChange}>
              <option value="choose">Choose an option</option>
              <option value="Light">Light</option>
              <option value="Medium">Medium</option>
              <option value="Dark">Dark</option>
            </select>
          </div>

          <div className="coffee-single-quantity">
            <label>Quantity: </label>
            <input
              type="number"
              value={quantity}
              min="1"
              onChange={handleQuantityChange}
            />
          </div>

          <button className="coffee-single-add-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      <div className="coffee-single-long-description">
        <h5>{coffee.longDescription}</h5>
      </div>
    </div>
  );
}

export default CoffeeDetail;
