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
    <div className="relative z-10">
      <div className="fixed top-0 left-0 right-0 bg-white">
        <nav className="flex-column lg:flex lg:h-16 justify-between items-center pt-3 lg:pt-0 text-slate-500 text-md md:text-lg font-semibold sm:rounded shadow-lg shadow-zinc-800">
          <ul className="h-full flex justify-center items-center lg:pl-5">
            <li className="pr-3 md:pr-9 hover:text-blue-600">
              <Link to="/">Home</Link>
            </li>

            <li className="pr-3 md:pr-9 hover:text-blue-600">
              <Link to="/about">About</Link>
            </li>

            <li className="pr-3 md:pr-9 hover:text-blue-600">
              <Link to="/contact">Contact</Link>
            </li>

            <li className="pr-3 md:pr-9 hover:text-blue-600">
              <Link to="/services">Services</Link>
            </li>

            {user ? (
              <li className="pr-3 md:pr-9 hover:text-blue-600">
                <Link to="/login" onClick={handleLogOut}>
                  LogOut
                </Link>
              </li>
            ) : (
              <li className="pr-3 md:pr-9 hover:text-blue-600">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>

          <div className="flex justify-center items-center">
            <input
              className="text-base text-black p-1 md:pl-2 rounded ml-3 mr-3 md:mr-9 mt-3 mb-3 lg:mr-12 lg:mt-0 lg:mb-0"
              type="text"
              placeholder="Search"
            />

            <button className="btn rounded btn-ghost mr-5">Search</button>

            <div className="flex-none mr-3 lg:mr-5">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">0</span>
                  </div>
                </label>

                <div
                  tabIndex={0}
                  className="mt-3 card rounded-md card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg">0 Items</span>
                    <span className="text-info">Subtotal: $00</span>

                    <div className="card-actions">
                      <button className="btn rounded-md btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
