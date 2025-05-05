import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// _id
// 681624aa990b82c5e5101485
// name
// "Blue Mountain Blend"
// region
// "Jamaica & Central America"

// notes
// Array (empty)
// description
// "This premium blend combines the famous Jamaican Blue Mountain coffee w…"
// price
// 59.99

// weightOptions
// Array (2)
// imageUrl
// "https://img.freepik.com/premium-photo/coffee-cup-coffee-beans_78677-58…"
// rating
// 0
// category
// "Premium Blends"
// bestSeller
// true
// __v
// 0
// createdAt
// 2025-05-04T14:17:08.344+00:00
// updatedAt
// 2025-05-04T14:17:08.344+00:00

function CoffeeBoxDetails() {
  const { id } = useParams();
  const [coffee, setCoffee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`http://localhost:4001/api/coffee-box/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setCoffee(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading box details", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!coffee) return <div>coffee not found</div>;

  return (
    <div className="coffee-details">
      <h1>{coffee.name}</h1>
      <img
        src={coffee.imageUrl}
        alt={coffee.name}
        style={{ maxWidth: "300px", borderRadius: "10px" }}
      />
      <p>
        <strong>Region:</strong> {coffee.region}
      </p>
      {/* <ul className="coffeeBox-list">
        {coffee.notes.map((note) => (
          <li className="coffeeBox-item" key={note._id}>
            {note.name}
          </li>
        ))}
      </ul> */}
      <p>
        <strong>Description:</strong> {coffee.description}
      </p>
      <p>
        <strong>Price:</strong> ${coffee.price}
      </p>
      <p>
        <strong>Available Weights:</strong>
      </p>
      <ul>
        {coffee.weightOptions.map((weight, index) => (
          <li key={index}>{weight} g</li>
        ))}
      </ul>
      <p>
        <strong>Category:</strong> {coffee.category}
      </p>
      <p>
        <strong>Best Seller:</strong> {coffee.bestSeller ? "Yes" : "No"}
      </p>
      <p>
        <strong>Rating:</strong> {coffee.rating} ⭐
      </p>
    </div>
  );
}
export default CoffeeBoxDetails;
