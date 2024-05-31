import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className=" bg-slate-200 shadow-md">
      <div className=" max-w-6xl p-4 mx-auto flex justify-between items-center">
        <h1 className="flex flex-wrap font-bold text-sm sm:text-xl cursor-pointer">
          <span className="text-slate-500">Swift</span>
          <span className=" text-slate-700">Estate</span>
        </h1>

        <form className=" flex bg-slate-100 p-2 rounded-lg items-center">
          <input
            type="text"
            placeholder="Search....."
            className=" bg-transparent focus:outline-none w-24 md:w-64"
          />
          <FaSearch className=" text-slate-600" />
        </form>

        <ul className="flex items-center gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:text-slate-900 cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:text-slate-900 cursor-pointer">
              About
            </li>
          </Link>
          <Link to="/signin">
            <li className="text-slate-700 hover:text-slate-900 cursor-pointer">
              Signin
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
