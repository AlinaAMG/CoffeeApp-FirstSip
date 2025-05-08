import React, { useState, useEffect } from "react";
import CoffeeEditModal from "./CoffeeEditModal";
import AddCoffee from "./AddCofee";
import axios from "axios";

const coffeeData = [
  {
    name: "",
    description: "",
    longDescription: "",
    region: "",
    notes: ["Chocolate", "Nutty"],
    price:1,
    category: "Single Origin",
    rating: 1,
    bestSeller: true,
    soldOut: false,
    weightOptions: [250, 1000],
    imageUrl: "",
  },
  // Add more
];

function CoffeeTable() {
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [coffees, setCoffees] = useState(coffeeData);
  const [openAddCafee, setOpenCoffee] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4001/api/coffees/all-coffees") // Fetch all coffees
      .then((res) => {
        console.log(res.data);
        setCoffees(res.data);
      })
      .catch((err) => {
        console.error("Error fetching coffee data:", err);
      });
  }, [openAddCafee]);

  const handleUpdate = (updated) => {
    const token = localStorage.getItem("token");
    axios
      .put("http://localhost:4001/api/coffees/update-coffee",
        updated,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
      .then((res) => {
        console.log("Update:", res);
        setCoffees((prev) => prev.map((c) => (c._id === updated._id ? updated : c)));
        setSelectedCoffee(null);
      })
      .catch((err) => {
        console.error("Error updating coffee data:", err);
        alert(`Error updating coffee. ${err?.response?.data?.message}`);
      });
  };

  const handleDelete = (toDelete) => {
    const token = localStorage.getItem("token");
    axios
      .delete("http://localhost:4001/api/coffees/delete-coffee", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: toDelete,
      })
      .then((res) => {
        console.log("Delete:", res);
        setCoffees((prev) => prev.filter((c) => c._id !== toDelete._id));
        setSelectedCoffee(null);
      })
      .catch((err) => {
        console.error("Error deleting coffee data:", err);
        alert(`Error deleting coffee. ${err?.response?.data?.message}`);
      });
  };

  return (
    <div className="container m-0">
      <div className="d-flex justify-content-between my-2">
        <h3>Coffee List</h3>
        <button className="btn btn-outline-secondary me-2" type="button" onClick={() => setOpenCoffee(true)}>
          Add Coffee
        </button>
      </div>
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {coffees.map((coffee, i) => (
            <tr key={i}>
              <td>{coffee.name}</td>
              <td>{coffee.description}</td>
              <td>
                <button className="btn btn-sm btn-info" style={{ color: "white", backgroundColor: "#4b2e2a" }} onClick={() => setSelectedCoffee(coffee)}>
                  ☰
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedCoffee && <CoffeeEditModal coffee={selectedCoffee} onClose={() => setSelectedCoffee(null)} onUpdate={handleUpdate} onDelete={handleDelete} />}
      {openAddCafee && <AddCoffee onClose={() => setOpenCoffee(false)} />}
    </div>
  );
}

export default CoffeeTable;
