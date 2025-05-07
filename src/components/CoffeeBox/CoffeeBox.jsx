import React, { useEffect, useState } from 'react';

import './CoffeeBox.css';
// import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import blumountainImg from './img/blue-mountain.png';
import koffieImg from './img/copkoffie.jpg';
import blackIvory from './img/black-ivory.png';

function CoffeeBox() {
  const [coffeeBoxes, setCoffeeBoxes] = useState([]); // Store all coffee boxes
  const [loading, setLoading] = useState(true); // Loading state
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]); // Cart state
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {



    
  const coffeeBoxesData = [
    {
      type: 'subscription',
      id: 'single-origin-box',
      name: 'Single Origin Box',
      description:
        'Explore the rich and diverse flavors of single origin coffees.',
      price: 29.50, // changed from pricePerMonth
      weight: '1000',
      quantity: 1,
      imageUrl: koffieImg,
      coffeeSelection: [
        {
          name: 'Black Ivory Coffee',
          description: 'Fruity, floral, and full of flavor.',
          region: 'Ethiopia',
          imageUrl: blackIvory,
        },
      ],
    },
    {
      type: 'subscription',
      id: 'organic-box',
      name: 'Organic Box',
      description: 'Certified organic coffees for a guilt-free experience.',
      price: 35.99,
      imageUrl: '',
      weight: '1000',
      quantity: 1,
      coffeeSelection: [
        {
          name: 'Organic Peru',
          description: 'Clean, with notes of caramel and cocoa.',
          region: 'Peru',
          imageUrl: koffieImg,
        },
      ],
    },
    {
      type: 'subscription',
      id: 'premium-box',
      name: 'Premium Box',
      imageUrl: '',
      description: 'Handpicked premium beans from the best regions.',
      price: 39.99,
      weight: '1000',
      quantity: 1,
      coffeeSelection: [
        {
          name: 'Jamaican Blue Mountain',
          description: 'Luxuriously smooth and mellow.',
          region: 'Jamaica',
          imageUrl: blumountainImg,
        },
      ],
    },
  ];
    // Simulate fetching the coffee boxes data
    setCoffeeBoxes(coffeeBoxesData);
    setLoading(false);

    // Get cart from localStorage
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);

    // Get user data from localStorage if available
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
    }
  }, []);

  useEffect(() => {
    // Whenever the cart is updated, save it to localStorage
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  const handleSubscribe = (box) => {
    if (!user) {
      // Alert the user to log in first to subscribe
      alert('Please log in first to subscribe to a coffee box!');
      // Redirect to login page after alert, passing the current location so we can redirect them back after login
      navigate('/login', { state: { from: location } });
    } else {
      // User is logged in, add the coffee box to the cart
      setCart((prevCart) => {
        const updatedCart = [...prevCart, box]; // Add the selected coffee box to the cart
        return updatedCart;
      });

      // Optionally, you can add a success message or provide feedback
      alert(`${box.name} has been added to your cart!`);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="container">
      <div className="coffeeBox-banner">
        <h2>Discover Our Coffee Boxes</h2>
        <p>
          Curated selections of the finest coffee from around the world,
          delivered to your door.
        </p>
        <button className="coffeeBox-banner-btn">
          Get 10% Discount if You Subscribe Today
        </button>
      </div>

      <div className="coffeeBox-title">Choose Your Coffee Box</div>
      <div className="coffeeBox-wrap">
        {coffeeBoxes.map((box, index) => (
          <div key={index} className="coffeeBox-card">
            <div className="coffeeBox-ribbon">
              <span>New</span>
            </div>
            <div className="coffeeBox-name">{box.name}</div>
            <div className="coffeeBox-data">
              <p>{box.description}</p>

              <p>
                <strong>Weight:</strong> {box.weight} g
              </p>
              <div className="coffeeBox-selection">
                {box.coffeeSelection.map((coffee, coffeeIndex) => (
                  <div key={coffeeIndex} className="coffeeBox-item">
                    <h4>
                      <strong>{coffee.name}</strong>
                    </h4>
                    <p>{coffee.description}</p>
                    <p>
                      <strong>Region:</strong> {coffee.region}
                    </p>
                    <p className="price-box">
                      <strong>Price:</strong> &euro; {box.price} / month
                    </p>
                    {coffee.imageUrl && (
                      <img
                        className="img-boxes"
                        src={coffee.imageUrl}
                        alt={coffee.name}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <button
              className="coffeeBox-button"
              onClick={() => handleSubscribe(box)} // Trigger the subscription handling
            >
              Subscribe Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoffeeBox;
