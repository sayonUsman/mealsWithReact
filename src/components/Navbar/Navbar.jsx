import React, { useState } from "react";
import Link from "../Link/Link";

const Navbar = () => {
  const navbarContent = [
    {
      id: 1,
      name: "Home",
    },

    {
      id: 2,
      name: "About",
    },

    {
      id: 3,
      name: "Contact",
    },

    {
      id: 4,
      name: "Services",
    },
  ];

  return (
    <nav className="flex-column lg:flex lg:h-16 justify-between items-center sm:mt-3 lg:mt-5 pt-3 lg:pt-0 container mx-auto bg-zinc-800 md:text-2xl text-white font-bold sm:rounded">
      <ul className="h-full flex justify-center items-center lg:pl-5">
        {navbarContent.map((content) => (
          <Link key={content.id} contentName={content.name}></Link>
        ))}
      </ul>

      <div className="flex justify-center items-center">
        <input
          className="text-base text-black p-1 pl-2 rounded mr-9 mt-3 mb-3 lg:mr-12 lg:mt-0 lg:mb-0"
          type="text"
          placeholder="Search"
        />

        <button className="btn rounded mr-5">Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
