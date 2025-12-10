import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";

import Home from "./pages/Home.js";
import DashBoard from "./pages/DashBoard.js";
import AddPlant from "./pages/AddPlant.js";
import PlantDetails from "./pages/PlantDetails.js";
import ActivityHistory from "./pages/ActivityHistory.js";
import Reminders from "./pages/Reminders.js";
import UserProfile from "./pages/Userprofile.js";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/dashboard", element: <DashBoard /> },
      { path: "/addplant", element: <AddPlant /> },
      { path: "/plantdetails", element: <PlantDetails /> },
      { path: "/history", element: <ActivityHistory /> },
      { path: "/reminders", element: <Reminders /> },
      { path: "/userprofile", element: <UserProfile /> },

     
      {
        path: "*",
        element: <h1>404 Page Not Found. Please check your URL.</h1>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
