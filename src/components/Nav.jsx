import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <header className="bg-slate-900 text-gray-500 body-font fixed top-0 left-0 right-0 z-10 overflow-scroll">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <Link to={"/"} className="mr-8 hover:text-gray-100">
              Home
            </Link>
            <Link to={"/mens"} className="mr-8 hover:text-gray-100">
              Men
            </Link>
            <Link to={"/women"} className="mr-8 hover:text-gray-100">
              Women
            </Link>
            <Link to={"/kids"} className="hover:text-gray-50">
              Kids
            </Link>
          </nav>
          <Link
            to={"/"}
            className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-10 h-10 text-white hover:text-slate-900 p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-slate-50 hover:text-slate-500 text-xl">
              PureDeals
            </span>
          </Link>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              CART
              <svg
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
