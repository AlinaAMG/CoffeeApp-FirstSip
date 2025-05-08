import React, { useState, useEffect } from 'react';
import CoffeeEditModal from './CoffeeEditModal'; 
import axios from 'axios';


function UsersTable() {
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [coffees, setCoffees] = useState(coffeeData);

  useEffect(() => {
    axios
      .get('http://localhost:4001/api/coffees/all-coffees') // Fetch all coffees
      .then((res) => {
        console.log(res.data);
        setCoffees(res.data);
      })
      .catch((err) => {
        console.error('Error fetching coffee data:', err);

      });
  }, []);

  const handleUpdate = (updated) => {
    setCoffees(prev =>
      prev.map(c => (c._id === updated._id ? updated : c))
    );
    setSelectedCoffee(null);
  };

  const handleDelete = (toDelete) => {
    setCoffees(prev =>
      prev.filter(c => c._id !== toDelete._id)
    );
    setSelectedCoffee(null);
  };

  return (
    <div className="container mt-4">
      <h3>Users List</h3>
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {coffees.map(coffee => (
            <tr key={coffee._id}>
              <td>{coffee.name}</td>
              <td>{coffee.description}</td>
              <td>
                <button className="btn btn-sm btn-info" style={{color:"white", backgroundColor:"#4b2e2a"}} 
                  onClick={() => setSelectedCoffee(coffee)}>☰</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedCoffee && (
        <CoffeeEditModal
          coffee={selectedCoffee}
          onClose={() => setSelectedCoffee(null)}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default UsersTable;
