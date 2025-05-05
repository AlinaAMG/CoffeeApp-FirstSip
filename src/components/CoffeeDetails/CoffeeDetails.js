import './CoffeeDetail.css';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Importing heart icons
import ShareIcon from './ShareIcon';

function CoffeeDetail() {
  const { id } = useParams();
  const [coffee, setCoffee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedWeight, setSelectedWeight] = useState('250g');
  const [selectedRoast, setSelectedRoast] = useState('Light');
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false); // State for favorite status

  useEffect(() => {
    // Fetch coffee details
    axios
      .get(`http://localhost:4001/api/coffees/coffee/${id}`)
      .then((res) => {
        setCoffee(res.data);
        setLoading(false);

        // Check if this coffee is a favorite in localStorage
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const isFavoriteCoffee = favorites.some((fav) => fav.id === id);
        setIsFavorite(isFavoriteCoffee); // Update the favorite status
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
    console.log('Adding to cart:', cartItem);

    // Get current cart from localStorage
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Checking for existing item with:');
    console.log('Coffee ID:', cartItem.coffee._id);
    console.log('Selected Weight:', cartItem.selectedWeight);
    // Check if the item already exists in the cart
    const itemIndex = currentCart.findIndex(
      (item) =>
        item.coffee._id === cartItem.coffee._id &&
        item.selectedWeight === cartItem.selectedWeight
    );

    if (itemIndex > -1) {
      currentCart[itemIndex].quantity += cartItem.quantity;
    } else {
      currentCart.push(cartItem);
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(currentCart));

    // Update cart count in navbar
    const currentCartCount = currentCart.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    localStorage.setItem('cartCount', currentCartCount);
    window.dispatchEvent(new Event('cartUpdated'));

    alert('Item added to the cart!');
  };

  const handleAddToFavorites = () => {
    const currentFavorites =
      JSON.parse(localStorage.getItem('favorites')) || [];

    const isAlreadyFavorite = currentFavorites.some(
      (fav) => fav._id === coffee._id
    );

    let updatedFavorites;

    if (isAlreadyFavorite) {
      updatedFavorites = currentFavorites.filter(
        (fav) => fav._id !== coffee._id
      );
      setIsFavorite(false);
      alert('Removed from favorites!');
    } else {
      updatedFavorites = [
        ...currentFavorites,
        {
          _id: coffee._id,
          name: coffee.name,
          imageUrl: coffee.imageUrl,
          price: coffee.price,
        },
      ];
      setIsFavorite(true);
      alert('Added to favorites!');
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    window.dispatchEvent(new Event('favoritesUpdated'));
  };

  if (loading) return <p>Loading...</p>;
  if (!coffee) return <p>Coffee not found</p>;

  return (
    <div className="coffee-single-wrapper">
      <Link to="/shop/all-coffees">
          <i className="bi bi-arrow-left" style={{ color: "#4b2e2a" }}></i>
          </Link>
      <div className="coffee-single-container">
      
        <div className="coffee-single-image-box">
          
          <img
            src={coffee.imageUrl}
            alt={coffee.name}
            className="coffee-single-image"
          />
        </div>

        <div className="coffee-single-info">
          <h1 className="coffee-single-title">{coffee.name}</h1>
          <div className="icons-container">
            <div
              className="favorite-icon"
              onClick={handleAddToFavorites}
              style={{
                cursor: 'pointer',
                fontSize: '2rem',
               
              }}
            >
              {isFavorite ? (
                <FaHeart className="text-danger" />
              ) : (
                <FaRegHeart className="heart" />
              )}
            </div>
           <ShareIcon/>
          </div>

          <p className="coffee-single-description">{coffee.description}</p>
          <p>
            <strong style={{color:"#444"}}>Notes:</strong> {coffee.notes.join(', ')}
          </p>
          <p>
            <strong style={{color:"#444"}}>Category:</strong> {coffee.category}
          </p>
          <p>
            <strong style={{color:"#444"}}>Rating:</strong> {coffee.rating} / 5
          </p>
          <p>
            <strong style={{color:"#444"}}>Region:</strong> {coffee.region}
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
            <strong style={{color:"#444"}}>Total:</strong>&euro;{getDisplayedPrice()}
          </p>
          <button className="coffee-single-add-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>


      <div className="coffee-single-long-description">
        <h4>Product Description</h4>
        {/* Split the longDescription into paragraphs */}
        {coffee.longDescription.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default CoffeeDetail;
