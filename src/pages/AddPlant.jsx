import React from "react";
import { NavLink} from "react-router-dom";
import {useOutletContext } from "react-router-dom";

import "../Styles/AddPlant.css";

function AddPlant() {
  const outlet = useOutletContext && useOutletContext();

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const type = form.type.value;
    const watering = form.watering.value;
    const fertilizing = form.fertilizing.value;

    if (!name) {
      alert("Please enter a plant name.");
      return;
    }

    const plant = {
      id: Date.now(),
      name: name,
      type: type || "",
      wateringFrequencyDays: watering || "",
      fertilizingFrequencyDays: fertilizing || "",
      lastWatered: "",
      lastFertilized: "",
     
    };

    try {
      const raw = localStorage.getItem("plants");
      var arr = [];
      if (raw) {
        arr = JSON.parse(raw);
      }
      arr.push(plant);
      localStorage.setItem("plants", JSON.stringify(arr));
      alert("Plant added.");
      form.reset();
      if (typeof outlet === "function") {
        try { outlet(); } catch (err) {}
      }
    } catch (err) {
      console.error("Failed to save plant:", err);
      alert("Unable to save plant.");
    }
  }

  return (
    <div className="addplant-page">
      <h2>Add Plant</h2>

      <form className="addplant-form" onSubmit={handleSubmit}>
        <label>
          Plant name
          <input name="name" type="text" placeholder="e.g. Money Plant" />
        </label>

        <label>
          Type / Species
          <input name="type" type="text" placeholder="e.g. Pothos" />
        </label>

        <label>
          Water every (days)
          <input name="watering" type="number" min="1" placeholder="e.g. 3" />
        </label>

        <label>
          Fertilize every (days)
          <input name="fertilizing" type="number" min="1" placeholder="e.g. 30" />
        </label>

        <label>
          Image URL (optional)
          <input name="image" type="text" placeholder="http://..." />
        </label>

        <div className="form-actions">
          <button type="submit" className="btn">Save Plant</button>
          <NavLink to="/dashboard" className="btn secondary">Back to Dashboard</NavLink>
        </div>
      </form>
    </div>
  );
}

export default AddPlant;
