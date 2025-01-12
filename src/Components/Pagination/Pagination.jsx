import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

const Pagination = ({
  totalPost,
  currentPage,
  mealPerPage,
  setCurrentPage,
}) => {
  const pageArr = [];
  for (let i = 1; i <= Math.ceil(totalPost / mealPerPage); i++) pageArr.push(i);

  const handleNext = () => {
    if (currentPage < pageArr.length) {
      setCurrentPage(currentPage + 1);
    }
  };

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
        onClick={handlePrev}
      />
      {pageArr.map((page, index) => (
        <button
          key={index}
          className={`w-6 h-6 text-xs text-orange-500 rounded-full duration-300 border-2 hover:scale-95 shadow-xl font-bold ${
            currentPage === page ? "text-white bg-orange-400" : ""
          }`}
          onClick={() => setCurrentPage(page)}
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
        onClick={handleNext}
      />
    </div>
  );
};

export default Pagination;
