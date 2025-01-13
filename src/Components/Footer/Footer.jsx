import React from "react";
import { SiSwiggy } from "react-icons/si"; // Importing Swiggy icon

const Footer = () => {
  return (
    <div className="h-35 bg-black w-full flex justify-center items-center text-gray-200 font-pop">
      {" "}
      {/* Footer container */}
      <div className="md:w-2/3 h-full grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-3 py-10">
        {" "}
        {/* Grid layout for footer content */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 items-center">
            <div>
              <SiSwiggy className="text-4xl" /> {/* Swiggy logo icon */}
            </div>
            <p className="text-center font-bold text-2xl">Swiggy</p>{" "}
            {/* Swiggy text */}
          </div>
          <p className="text-m p-2 text-gray-300">
            © 2025 Bundl Technologies Pvt. Ltd {/* Copyright notice */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
