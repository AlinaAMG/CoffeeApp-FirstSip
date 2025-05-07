import React, { useState, useEffect } from "react";
import Modal from "./Modal";

function CoffeeEditModal({ coffee, onClose, onUpdate, onDelete }) {
  const [formData, setFormData] = useState({ ...coffee });

  useEffect(() => {
    setFormData({ ...coffee }); // update form when coffee prop changes
    console.log("coffee=>", coffee);
  }, [coffee]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Convert to number or boolean if needed
    let parsedValue = name === "price" || name === "rating" ? parseFloat(value) : name === "bestSeller" || name === "soldOut" ? e.target.checked : value;

    if (e.target.name === "rating") {
      if (parsedValue > 5.0) parsedValue = 5.0;
      if (parsedValue < 1.0) parsedValue = 1.0;
      console.log("handleChange: ", parsedValue);
    }

    setFormData({ ...formData, [name]: parsedValue });
  };

  const handleArrayChange = (e, key) => {
    setFormData({ ...formData, [key]: e.target.value.split(",").map((s) => s.trim()) });
  };

  const handleUpdate = () => onUpdate(formData);
  const handleDelete = () => onDelete(formData);
  const handleClose =()=>onClose(null)

  return (
    <Modal 
      title="Edit Coffee" 
      onClose={() => handleClose()} 
      onSubmit={() => handleUpdate(formData)} 
      onDelete={() => handleDelete(formData)}
      >
      {/* Editable fields */}
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Name</label>
          <input name="name" value={formData.name} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Description</label>
          <input name="description" value={formData.description} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Long Description</label>
          <textarea name="longDescription" value={formData.longDescription} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Region</label>
          <input name="region" value={formData.region} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-md-4">
          <label className="form-label">Category</label>
          <select name="category" value={formData.category} onChange={handleChange} className="form-select">
            <option value="">Select Category</option>
            <option value="Single Origin">Single Origin</option>
            <option value="Organic">Organic</option>
            <option value="Premium Blends">Premium Blends</option>
          </select>
        </div>
        <div className="col-md-4">
          <label className="form-label">Price</label>
          <input name="price" type="number" value={formData.price} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-md-4">
          <label className="form-label">Rating</label>
          <input name="rating" type="number" value={formData.rating} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Notes (comma-separated)</label>
          <input value={formData.notes?.join(", ")} onChange={(e) => handleArrayChange(e, "notes")} className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Weight Options (comma-separated)</label>
          <input value={formData.weightOptions?.join(", ")} onChange={(e) => handleArrayChange(e, "weightOptions")} className="form-control" />
        </div>
        <div className="col-md-6 form-check mt-3">
          <input name="bestSeller" type="checkbox" className="form-check-input" checked={formData.bestSeller} onChange={handleChange} />
          <label className="form-check-label">Best Seller</label>
        </div>
        <div className="col-md-6 form-check mt-3">
          <input name="soldOut" type="checkbox" className="form-check-input" checked={formData.soldOut} onChange={handleChange} />
          <label className="form-check-label">Sold Out</label>
        </div>
      </div>
    </Modal>
  );
}

export default CoffeeEditModal;
