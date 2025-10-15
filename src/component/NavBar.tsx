import React from "react";
import medium from "/medium.svg";
import twitter from "/twitter.svg";
import facebook from "/facebook.svg";

const Navbar: React.FC = () => {
  return (
    <div className="shadow-sm">
      <nav className="w-full flex justify-between items-center px-6 py-3 bg-white  max-w-6xl mx-auto">
        <div className="flex items-center gap-4">
          <img src={twitter} alt="Twitter" className="w-5 h-5 cursor-pointer" />
          <img
            src={facebook}
            alt="Facebook"
            className="w-5 h-5 cursor-pointer"
          />
          <img src={medium} alt="Medium" className="w-5 h-5 cursor-pointer" />
        </div>

        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Finance Logo" />
        </div>

        <div className="flex flex-col justify-center items-end gap-[4px] cursor-pointer">
          <span className="block w-7 h-[2px] bg-gray-800 rounded"></span>
          <span className="block w-5 h-[2px] bg-gray-800 rounded"></span>
          <span className="block w-3 h-[2px] bg-gray-800 rounded"></span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
