import React from "react";
import Marquee from "react-fast-marquee";
import Typical from "react-typical";

const Header = () => {
  return (
    <div>
      <Marquee>
        <h1 className="text-slate-500 text-md sm:text-xl lg:text-3xl font-semibold text-center md:mt-3 md:mb-3 lg:mb-5">
          Are You Hungry!!! Take Your Favourite Meals.
        </h1>
      </Marquee>
    </div>
  );
};

export default Header;
