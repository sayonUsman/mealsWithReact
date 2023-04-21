import React from "react";
import { useLoaderData } from "react-router-dom";

const MealDetails = () => {
  let details = useLoaderData();
  details = details.meals[0];

  return (
    <div className="container mx-auto mt-2 mb-2">
      <div className="card bg-base-100 shadow-xl rounded-none md:rounded-lg">
        <div className="rounded-xl">
          <figure>
            <img
              src={details.strMealThumb}
              alt="Meal"
              className="md:rounded-xl"
            />
          </figure>
        </div>

        <div className="card-body">
          <h2 className="card-title">{details.strMeal}</h2>
          <h3 className="text-md font-semibold">
            {details.strArea}
            <span className="ml-1">{details.strCategory} </span>
          </h3>
          <p>{details.strInstructions}</p>
          <div className="card-actions justify-end">
            <button className="btn rounded">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
