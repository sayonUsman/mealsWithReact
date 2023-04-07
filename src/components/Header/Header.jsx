import React from "react";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mt-3 mb-5 md:mb-7">
        Take Your Favourite Meals
      </h1>
    </div>
  );
};

export default Header;
