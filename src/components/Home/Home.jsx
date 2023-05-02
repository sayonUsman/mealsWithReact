import React from "react";
import { useLoaderData } from "react-router";
import MealCard from "../MealCard/MealCard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Header></Header>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.meals.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal}></MealCard>
          ))}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
