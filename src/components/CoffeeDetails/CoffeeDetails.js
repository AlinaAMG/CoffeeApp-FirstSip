import './CoffeeDetail.css';
import { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import axios from 'axios';


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

  const getDisplayedPrice = () => {
    if (!coffee || !coffee.price) return '0.00';
  
    let basePrice = coffee.price; // price for 250g
    let weightMultiplier = 1;
  
    if (selectedWeight === '1000g') {
      weightMultiplier = 4;
    }
  
    const totalPrice = basePrice * weightMultiplier * quantity;
    return totalPrice.toFixed(2);
  };

 
  const handleAddToCart = () => {
    // Check if the user has selected a weight
    if (selectedWeight === 'choose') {
      alert('Please select a weight!');
      return;
    }

    const cartItem = { coffee, selectedWeight, quantity };

    // Get current cart from localStorage
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item already exists in the cart
    const itemIndex = currentCart.findIndex(
      (item) => item.coffee.id === cartItem.coffee.id && item.selectedWeight === cartItem.selectedWeight
    );

    if (itemIndex > -1) {
      // If the item already exists, update the quantity
      currentCart[itemIndex].quantity += cartItem.quantity;
    } else {
      // If the item doesn't exist, add it to the cart
      currentCart.push(cartItem);
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(currentCart));

    // Update cart count in navbar
    const currentCartCount = currentCart.reduce((acc, item) => acc + item.quantity, 0);
    localStorage.setItem('cartCount', currentCartCount);

    
    alert('Item added to the cart!');
  };

  if (loading) return <p>Loading...</p>;
  if (!coffee) return <p>Coffee not found</p>;

  return (
    <div className="coffee-single-wrapper">
      <div className="coffee-single-container">
        <div className="coffee-single-image-box">
       <Link to ="/shop/all-coffees"><i className="bi bi-arrow-left"></i></Link> 
          <img
            src={coffee.imageUrl}
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
          <p className="totalPrice">
            <strong>Total:</strong>&euro;{getDisplayedPrice()}
          </p>
          <button className="coffee-single-add-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      <div className="coffee-single-long-description">
        <h4>Product Description</h4>
        <h5>{coffee.longDescription}</h5>
      </div>
    </div>
  );
}

export default CoffeeDetail;
