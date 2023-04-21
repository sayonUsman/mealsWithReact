import React from "react";
import { Link } from "react-router-dom";

const MealCard = ({ meal }) => {
  const instructions = meal.strInstructions;

  return (
    <div className="card w-124 glass m-2 rounded-lg shadow-lg shadow-zinc-800">
      <figure>
        <img src={meal.strMealThumb} alt="Meal" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{meal.strMeal}</h2>
        <p>
          {instructions.length > 325
            ? instructions.slice(0, 325) + "....."
            : instructions}
        </p>

        <div className="card-actions justify-end">
          <button className="btn rounded">
            <Link to={`/details/${meal.idMeal}`}>Show Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
