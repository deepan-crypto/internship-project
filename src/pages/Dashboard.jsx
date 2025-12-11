import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: 24 }}>
      <h1>Dashboard</h1>
      <p>Welcome — you are now on the dashboard.</p>
      <button onClick={() => navigate("/login")}>Logout</button>
    </div>
  );
};

export default Dashboard;
