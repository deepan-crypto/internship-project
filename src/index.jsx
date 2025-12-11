import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import DashBoard from "./pages/DashBoard.jsx";
import AddPlant from "./pages/AddPlant.jsx";
import PlantDetails from "./pages/PlantDetails.jsx";
import ActivityHistory from "./pages/ActivityHistory.jsx";
import Reminders from "./pages/Reminders.jsx";
import UserProfile from "./pages/Userprofile.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        path: "/",
         element: <Home /> 
        },
      {
         path: "/dashboard", 
         element: <DashBoard /> 
        },
      { 
        path: "/addplant", 
        element: <AddPlant /> 
      },
      { 
        path: "/plantdetails", 
        element: <PlantDetails />
       },
      { 
        path: "/history",
         element: <ActivityHistory /> 
        },
      { 
        path: "/reminders",
         element: <Reminders />
         },
      {
         path: "/userprofile", 
         element: <UserProfile /> 
        },
      { 
        path: "/dashboard/:res",
         element: <DashBoard /> }, 
      {
        path: "*",
        element: <h1>Edit Plant Page.</h1>,
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

export { router };
