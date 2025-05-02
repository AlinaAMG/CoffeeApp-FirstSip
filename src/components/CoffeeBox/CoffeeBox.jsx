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

  if (loading) return <div className="p-4">Loading...</div>;

  const renderCoffeeList = (title, coffees) => (
    <div className="section">
      <h2 className="section-title">{title}</h2>
      <div className="coffee-grid">
        {coffees.map((coffee, index) => (
          <div key={index} className="coffee-card">
            <h3 className="coffee-name">{coffee.name}</h3>
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
            <p className="price">
              <strong>Price:</strong> ${coffee.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container">
      <h1 className="main-title">Our coffee boxes</h1>
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
