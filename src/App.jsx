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
        const response = await fetch("http://localhost:5173/plant.json");
        const da = await response.json();
        setData(da);
      } catch (err) {
        console.log(err);
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