import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./CoffeeBox.css";

// const mockCoffeeData = {
//   organicCoffees: [
//   {
//     "_id": "68150efd47b342939cee9afa",
//     "name": "Starter Box",
//     "description": "Perfect for new coffee lovers.",
//     "pricePerMonth": 12.99,
//     "discountForSubscription": 10,
//     "coffeeSelection": [],
//     "weight": "250",
//     "surprise": false,
//     "slug": "starter-box",
//     "active": true,
//     "__v": 0,
//     "createdAt": "2025-05-04T13:11:14.952Z",
//     "updatedAt": "2025-05-04T13:11:14.952Z"
//   },
//   {
//     "_id": "68150efd47b342939cee9afb",
//     "name": "Espresso Enthusiast",
//     "description": "Hand-picked beans for espresso fans.",
//     "pricePerMonth": 15.99,
//     "discountForSubscription": 12,
//     "coffeeSelection": [],
//     "weight": "250",
//     "surprise": true,
//     "slug": "espresso-enthusiast",
//     "active": true,
//     "__v": 0,
//     "createdAt": "2025-05-04T13:11:14.953Z",
//     "updatedAt": "2025-05-04T13:11:14.953Z"
//   },
//   {
//     "_id": "68150efd47b342939cee9afc",
//     "name": "Filter Finesse",
//     "description": "Ideal for filter coffee brewers.",
//     "pricePerMonth": 13.49,
//     "discountForSubscription": 8,
//     "coffeeSelection": [],
//     "weight": "1000",
//     "surprise": false,
//     "slug": "filter-finesse",
//     "active": true,
//     "__v": 0,
//     "createdAt": "2025-05-04T13:11:14.953Z",
//     "updatedAt": "2025-05-04T13:11:14.953Z"
//   },
//   {
//     "_id": "68150efd47b342939cee9afd",
//     "name": "Dark Roast Box",
//     "description": "Bold and strong flavor selection.",
//     "pricePerMonth": 14.99,
//     "discountForSubscription": 15,
//     "coffeeSelection": [],
//     "weight": "250",
//     "surprise": true,
//     "slug": "dark-roast-box",
//     "active": true,
//     "__v": 0,
//     "createdAt": "2025-05-04T13:11:14.953Z",
//     "updatedAt": "2025-05-04T13:11:14.953Z"
//   },
//   {
//     "_id": "68150efd47b342939cee9afe",
//     "name": "Light Roast Sampler",
//     "description": "Explore light roast profiles.",
//     "pricePerMonth": 11.99,
//     "discountForSubscription": 5,
//     "coffeeSelection": [],
//     "weight": "250",
//     "surprise": false,
//     "slug": "light-roast-sampler",
//     "active": true,
//     "__v": 0,
//     "createdAt": "2025-05-04T13:11:14.953Z",
//     "updatedAt": "2025-05-04T13:11:14.953Z"
//   },
//   {
//     "_id": "68150efd47b342939cee9aff",
//     "name": "World Tour Box",
//     "description": "Coffees from 5 continents.",
//     "pricePerMonth": 19.99,
//     "discountForSubscription": 20,
//     "coffeeSelection": [],
//     "weight": "1000",
//     "surprise": true,
//     "slug": "world-tour-box",
//     "active": true,
//     "__v": 0,
//     "createdAt": "2025-05-04T13:11:14.953Z",
//     "updatedAt": "2025-05-04T13:11:14.953Z"
//   },
//   {
//     "_id": "68150efd47b342939cee9b00",
//     "name": "Surprise Box",
//     "description": "A mystery selection every month.",
//     "pricePerMonth": 16.99,
//     "discountForSubscription": 18,
//     "coffeeSelection": [],
//     "weight": "250",
//     "surprise": true,
//     "slug": "surprise-box",
//     "active": true,
//     "__v": 0,
//     "createdAt": "2025-05-04T13:11:14.953Z",
//     "updatedAt": "2025-05-04T13:11:14.953Z"
//   },
//   {
//     "_id": "68150efd47b342939cee9b01",
//     "name": "Office Box",
//     "description": "Large pack for the whole team.",
//     "pricePerMonth": 25,
//     "discountForSubscription": 25,
//     "coffeeSelection": [],
//     "weight": "1000",
//     "surprise": false,
//     "slug": "office-box",
//     "active": true,
//     "__v": 0,
//     "createdAt": "2025-05-04T13:11:14.953Z",
//     "updatedAt": "2025-05-04T13:11:14.953Z"
//   },
//   {
//     "_id": "68150efd47b342939cee9b02",
//     "name": "Decaf Delight",
//     "description": "Delicious without the buzz.",
//     "pricePerMonth": 13,
//     "discountForSubscription": 10,
//     "coffeeSelection": [],
//     "weight": "250",
//     "surprise": false,
//     "slug": "decaf-delight",
//     "active": true,
//     "__v": 0,
//     "createdAt": "2025-05-04T13:11:14.953Z",
//     "updatedAt": "2025-05-04T13:11:14.953Z"
//   },
//   {
//     "_id": "68150efd47b342939cee9b03",
//     "name": "Barista Choice",
//     "description": "Curated by top baristas monthly.",
//     "pricePerMonth": 17.99,
//     "discountForSubscription": 22,
//     "coffeeSelection": [],
//     "weight": "250",
//     "surprise": true,
//     "slug": "barista-choice",
//     "active": true,
//     "__v": 0,
//     "createdAt": "2025-05-04T13:11:14.953Z",
//     "updatedAt": "2025-05-04T13:11:14.953Z"
//   }
// ],
// };

function CoffeeBox() {
  const [coffee, setCoffee] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleSubscribeClick = () => {
    if (isLoggedIn) {
      navigate("/shop");
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:4001/api/coffee-box/all-coffee-boxes")
      .then((res) => {
        console.log("Coffee boxes response:", res.data);
        setCoffee(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error to fetch data:", err);
        setLoading(false);
      });
  }, []);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCoffee(mockCoffeeData);
  //     setLoading(false);
  //   }, 500);
  // }, []);

  if (loading || !coffee) return <div className="loading">Loading...</div>;

  const renderCoffeeBoxes = () => (
    <div className="coffeeBox-wrap">
      {coffee &&
        coffee.map((box, _id) => (
          <div key={_id} className="coffeeBox-card">
            <h3 className="coffeeBox-name">{box.name}</h3>
            <div className="coffeeBox-data">
              <p>
                <strong>Description:</strong> {box.description}
              </p>
              <h3 className="coffeeBox-type">Coffees type:</h3>
              <ul className="coffeeBox-list">
                {box.coffeeSelection.map((coffee) => (
                  <Link
                    className="coffeeBox-link"
                    to={`/coffee-box/details/${coffee._id}`}
                  >
                    <li className="coffeeBox-item" key={coffee._id}>
                      {coffee.name}
                    </li>
                  </Link>
                ))}
              </ul>
              <p>
                <strong>Weight:</strong> {box.weight}g
              </p>
              <p>
                <strong>Price per month:</strong> $
                {box.pricePerMonth.toFixed(2)}
              </p>
              <p>
                <strong>Discount:</strong> {box.discountForSubscription}%
              </p>
              <p>
                <strong>Surprise:</strong> {box.surprise ? "Yes" : "No"}
              </p>
            </div>
            <button
              className="coffeeBox-button"
              type="button"
              onClick={handleSubscribeClick}
            >
              Subscribe now
            </button>
            <div className="coffeeBox-ribbon">
              <span>{box.discountForSubscription}% OFF</span>
            </div>
          </div>
        ))}
    </div>
  );

  return (
    <div className="container">
      <h1 className="coffeeBox-title">Our Coffee Boxes</h1>
      <div className="coffeeBox-banner">
        <h2>☕ Join Our Coffee Subscription Club!</h2>
        <p>
          Subscribe today and get <strong>discounts</strong> on curated coffee
          boxes monthly.
        </p>
        <p>
          Enjoy premium coffee boxes shipped monthly, starting at just{" "}
          <strong>$11.99</strong>.
        </p>
        <p>
          Get <strong>exclusive discounts</strong>: 8%, 10%, or even 12% —
          depending on your box!
        </p>
        <p>
          <strong>And yes — free shipping on every box!</strong> 📦
        </p>
        <button
          className="coffeeBox-banner-btn"
          type="button"
          onClick={handleSubscribeClick}
        >
          Subscribe Now
        </button>
      </div>
      {renderCoffeeBoxes()}
    </div>
  );
}
export default CoffeeBox;
