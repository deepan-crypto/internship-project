import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dash-page">
      <h2 className="title">Dashboard</h2>

      <div className="dash-layout">
        <aside className="left-box">
          <h3>Plants</h3>
          <NavLink to="/addplant" className="btn">
            Add Plant
          </NavLink>
          <p>No plants added yet.</p>
        </aside>

        <main className="center-box">
          <h3>Full Profile</h3>
          <div className="card">Plant details shown here.</div>

          <h3>Watering History</h3>
          <div className="card">No watering history yet.</div>

          <h3>Fertilizing History</h3>
          <div className="card">No fertilizing history yet.</div>

          <h3>Growth Image Timeline</h3>
          <div className="card">No growth images yet.</div>
        </main>

        <aside className="right-box">
          <h3>All Activities</h3>
          <div className="card">No activities yet.</div>

          <h3>Filters</h3>
          <div className="card">Filter by Date / Plant / Type</div>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
export { Dashboard };
