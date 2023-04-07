import React from "react";

const MealCard = ({ meal }) => {
  console.log(meal);
  return (
    <div className="card w-124 glass m-2 rounded-lg shadow-lg shadow-zinc-800">
      <figure>
        <img src={meal.strMealThumb} alt="Meal" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{meal.strMeal}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          accusamus nam corporis. Voluptatum, at tempore. Vitae optio dolor
          eveniet, cum enim natus laboriosam similique itaque, iure minima
          perferendis eligendi ea, aut rerum odio!.
        </p>
        <div className="card-actions justify-end">
          <button className="btn rounded">Show Details</button>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
