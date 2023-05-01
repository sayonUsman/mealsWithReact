import React from "react";
import { useLoaderData } from "react-router";
import MealCard from "../MealCard/MealCard";
import Header from "../Header/Header";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal}></MealCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
