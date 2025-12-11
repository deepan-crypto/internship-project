import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import DashBoard from "./pages/DashBoard.jsx";
import AddPlant from "./pages/AddPlant.jsx";
import PlantDetails from "./pages/PlantDetails.jsx";
import ActivityHistory from "./pages/ActivityHistory.jsx";
import Reminders from "./pages/Reminders.jsx";
import UserProfile from "./pages/Userprofile.jsx";
import Login from "./pages/Login";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
         path: "/", 
         element: <DashBoard /> 
        },
        {
          path:"/Login",
          element:<Login/>
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
        path: "*",
        element: <h1>404 Page Not Found. Please check your URL.</h1>,
      },
    ],
  },
]);



export { router };
