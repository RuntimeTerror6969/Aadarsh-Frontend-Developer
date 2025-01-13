import React from "react";
import { IoMdArrowDropright } from "react-icons/io"; // Importing right arrow icon
import { IoMdArrowDropleft } from "react-icons/io"; // Importing left arrow icon

const Pagination = ({
  totalPost,
  currentPage,
  mealPerPage,
  setCurrentPage,
}) => {
  const pageArr = [];

  // Calculate the total number of pages and populate the pageArr
  for (let i = 1; i <= Math.ceil(totalPost / mealPerPage); i++) {
    pageArr.push(i);
  }

  // Function to handle the next button click
  const handleNext = () => {
    if (currentPage < pageArr.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to handle the previous button click
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex gap-3 items-center">
      <IoMdArrowDropleft
        className={`text-lg cursor-pointer ${
          currentPage === 1
            ? "text-gray-300"
            : "text-gray-600 hover:text-orange-500"
        }`}
        onClick={handlePrev} // Navigate to the previous page
      />
      {pageArr.map((page, index) => (
        <button
          key={index}
          className={`w-6 h-6 text-xs text-orange-500 rounded-full duration-300 border-2 hover:scale-95 shadow-xl font-bold ${
            currentPage === page ? "text-white bg-orange-400" : ""
          }`}
          onClick={() => setCurrentPage(page)} // Navigate to a specific page
        >
          {page}
        </button>
      ))}
      <IoMdArrowDropright
        className={`text-lg cursor-pointer ${
          currentPage === pageArr.length
            ? "text-gray-300"
            : "text-gray-600 hover:text-orange-500"
        }`}
        onClick={handleNext} // Navigate to the next page
      />
    </div>
  );
};

export default Pagination; // Exporting the Pagination component for use in other parts of the app
