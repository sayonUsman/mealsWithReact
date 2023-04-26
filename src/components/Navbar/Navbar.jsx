import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/ContextProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogOut = () => {
    setMessage("");
    setErrorMessage("");

    logOut()
      .than(() => {
        setMessage("Successfully logOut");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <nav className="flex-column lg:flex lg:h-16 justify-between items-center sm:mt-3 lg:mt-5 pt-3 lg:pt-0 container mx-auto bg-zinc-800 md:text-2xl text-white font-bold sm:rounded">
      <ul className="h-full flex justify-center items-center lg:pl-5">
        <li className="pr-3 md:pr-9">
          <Link to="/">Home</Link>
        </li>

        <li className="pr-3 md:pr-9">
          <Link to="/about">About</Link>
        </li>

        <li className="pr-3 md:pr-9">
          <Link to="/contact">Contact</Link>
        </li>

        <li className="pr-3 md:pr-9">
          <Link to="/services">Services</Link>
        </li>

        {user ? (
          <li className="pr-3 md:pr-9">
            <Link to="/login" onClick={handleLogOut}>
              LogOut
            </Link>
          </li>
        ) : (
          <li className="pr-3 md:pr-9">
            <Link to="/login">Login</Link>
          </li>
        )}
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
