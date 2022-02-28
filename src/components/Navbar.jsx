import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle, FcSearch } from "react-icons/fc";
import { BsCloudMoon, BsCloudSun } from "react-icons/bs";
import { Search } from "./Search";

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen ">
        <Link to="/">
          <p className="flex justify-center items-center text-2xl py-1 px-2 rounded-xl hover:bg-gray-200  ">
            <FcGoogle />
            <FcSearch />
          </p>
        </Link>
        <button
          type="button"
          className="text-xl dark:text-black dark:bg-gray-400 dark:hover:bg-white bg-white hover:bg-gray-200 border rounded-full px-2 py-1 hover:shadow-lg"
          onClick={() => setDarkTheme(!darkTheme)}
        >
          {darkTheme ? <BsCloudSun /> : <BsCloudMoon />}
        </button>
      </div>
      <Search />
    </div>
  );
};
