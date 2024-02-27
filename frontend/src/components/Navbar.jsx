import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-12 sm:h-16 shadow-sm sticky z-30 right-0 top-0 bg-white">
        <div className="w-[90%] md:w-[80%] mx-auto h-full flex items-center justify-between">
          <h1 className="text-[15px] font-bold sm:text-2xl "> <Link to="/">Passing Thoughts</Link> </h1>
          <div className="flex items-center justify-between gap-1">
            <button className=" border border-gray-400 border-2 py-[3px] px-[4px] sm:py-1.5 sm:px-3 sm:text-sm text-xs rounded-sm hover:bg-gray-100 font-semibold"><Link to="/register">Register</Link></button>
            <button className=" py-[3px] px-[4px] text-xs sm:py-1.5 sm:px-3 sm:text-sm rounded-sm bg-blue-600 text-white font-semibold border border-2 border-blue-600 hover:bg-blue-700"><Link to="/login">Login</Link></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
