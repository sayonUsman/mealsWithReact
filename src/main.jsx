import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home";
import MealDetails from "./components/MealDetails/MealDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () =>
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="),
  },

  {
    path: "/details/:idMeal",
    element: <MealDetails></MealDetails>,
    loader: ({ params }) =>
      fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`
      ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
