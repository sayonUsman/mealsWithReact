import React from "react";
import Marquee from "react-fast-marquee";
import Typical from "react-typical";

const Header = () => {
  return (
    <div className="mt-2 lg:mt-3 md:mt-3">
      <Marquee>
        <h1 className="text-slate-500 text-md sm:text-xl lg:text-3xl font-semibold text-center mt-24 lg:mt-16 mb-3 lg:mb-5">
          Are You Hungry!!! Take Your Favourite Meals.
        </h1>
      </Marquee>
    </div>
  );
};

export default Header;
