import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CoffeeBox.css";

const mockCoffeeData = {
  organicCoffees: [
    {
      name: "Ethiopian Organic Yirgacheffe",
      weight: "250g",
      notes: ["Floral", "Citrus", "Clean finish"],
      region: "Yirgacheffe, Ethiopia",
      roastLevel: "Light-Medium",
      price: 8.5,
    },
    {
      name: "Peruvian Organic Chanchamayo",
      weight: "250g",
      notes: ["Cocoa", "Honey", "Bright acidity"],
      region: "Chanchamayo, Peru",
      roastLevel: "Medium",
      price: 7.75,
    },
    {
      name: "Guatemalan Organic Antigua",
      weight: "250g",
      notes: ["Chocolate", "Smoky", "Smooth body"],
      region: "Antigua, Guatemala",
      roastLevel: "Medium-Dark",
      price: 8.0,
    },
  ],
  SingleOriginCoffees: [
    {
      name: "Ethiopian Organic Yirgacheffe",
      weight: "250g",
      notes: ["Floral", "Citrus", "Clean finish"],
      region: "Yirgacheffe, Ethiopia",
      roastLevel: "Light-Medium",
      price: 8.5,
    },
    {
      name: "Peruvian Organic Chanchamayo",
      weight: "250g",
      notes: ["Cocoa", "Honey", "Bright acidity"],
      region: "Chanchamayo, Peru",
      roastLevel: "Medium",
      price: 7.75,
    },
    {
      name: "Guatemalan Organic Antigua",
      weight: "250g",
      notes: ["Chocolate", "Smoky", "Smooth body"],
      region: "Antigua, Guatemala",
      roastLevel: "Medium-Dark",
      price: 8.0,
    },
  ],
  premiumSingleOriginCoffees: [
    {
      name: "Kenya AA Single Origin",
      weight: "250g",
      notes: ["Black currant", "Dark chocolate", "Full-bodied"],
      region: "Kenya",
      roastLevel: "Medium",
      price: 8.99,
    },
    {
      name: "Costa Rican Tarrazu",
      weight: "250g",
      notes: ["Citrus", "Caramel", "Mild acidity"],
      region: "Tarrazu, Costa Rica",
      roastLevel: "Medium",
      price: 7.99,
    },
    {
      name: "Colombian Supremo",
      weight: "250g",
      notes: ["Nutty", "Sweet", "Mild acidity"],
      region: "Huila, Colombia",
      roastLevel: "Medium",
      price: 9.99,
    },
  ],
};

function CoffeeBox() {
  const [coffee, setCoffee] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get("/api/coffee-boxes")
  //     .then((res) => {
  //       setCoffee(res.data); // встановлюємо отримані дані
  //       setLoading(false); // вимикаємо індикатор завантаження
  //     })
  //     .catch((err) => {
  //       console.error("Error to fetch data:", err);
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setCoffee(mockCoffeeData);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  const renderCoffeeList = (title, coffees) => (
    <div className="coffeeBox-section">
      <h2 className="coffeeBox-section-title">{title}</h2>
      <div className="coffeeBox-wrap">
        {coffees.map((coffee, index) => (
          <div key={index} className="coffeeBox-card">
            <h3 className="coffeeBox-name">{coffee.name}</h3>
            <div className="coffeeBox-data">
              <p>
                <strong>Region:</strong> {coffee.region}
              </p>
              <p>
                <strong>Roast Level:</strong> {coffee.roastLevel}
              </p>
              <p>
                <strong>Weight:</strong> {coffee.weight}
              </p>
              <p>
                <strong>Notes:</strong> {coffee.notes.join(", ")}
              </p>
              <p className="coffeeBox-price">
                <strong>Price:</strong> ${coffee.price.toFixed(2)}
              </p>
            </div>

            <button className="coffeeBox-button" type="button">
              Subscribe now
            </button>
            <div className="coffeeBox-ribbon">
              <span>15% OFF</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container">
      <h1 className="coffeeBox-title">Our coffee boxes</h1>
      <div className="coffeeBox-banner">
        <h2>☕ Join Our Coffee Subscription Club!</h2>
        <p>
          Subscribe today and get <strong>15% off</strong> one coffee box every
          month. Choose from our premium, organic, or single-origin selections.
        </p>
        <button className="coffeeBox-banner-btn">Subscribe Now</button>
      </div>
      {renderCoffeeList("Organic Coffees", coffee.organicCoffees)}
      {renderCoffeeList("Single Origin Coffees", coffee.SingleOriginCoffees)}
      {renderCoffeeList(
        "Premium Single Origin Coffees",
        coffee.premiumSingleOriginCoffees
      )}
    </div>
  );
}
export default CoffeeBox;
