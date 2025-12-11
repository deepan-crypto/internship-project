import React, { useState, useEffect } from "react";
import "./App.css";
import { Outlet, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Common/Header.jsx";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  let [data, setData] = useState([]);

  useEffect(() => {
    const fetchplantdata = async () => {
      try {
        // use a relative path so the dev server serves the public file reliably
        const response = await fetch("/plant.json");
        if (!response.ok) {
          throw new Error(`Failed to fetch /plant.json: ${response.status} ${response.statusText}`);
        }
        const da = await response.json();
        setData(da);
      } catch (err) {
        console.error("Error fetching plant data:", err);
        setData([]); // fallback to empty array
      }
    };
    fetchplantdata();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Outlet
        context={{
          data,
        }}
      />
    </div>
  );
}
export default App;