import axios from "axios"; // Importing axios for making HTTP requests
import React, { useState, useEffect } from "react"; // Importing React and necessary hooks
import { IoClose } from "react-icons/io5"; // Importing close icon
import { useNavigate } from "react-router-dom"; // Importing navigation hook
import { IoIosRadioButtonOn } from "react-icons/io"; // Importing radio button icon
import { IoIosAdd } from "react-icons/io"; // Importing add icon
import Skeleton from "react-loading-skeleton"; // Importing skeleton loader
import "react-loading-skeleton/dist/skeleton.css"; // Importing skeleton CSS

const idUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="; // URL to fetch meal details

// Component to display meal details in a modal
const FoodModal = ({ id, setFlag }) => {
  const [idData, setIdData] = useState({}); // State to store meal details
  const navigate = useNavigate(); // Hook for navigation

  // Function to fetch meal details from the API
  const fetchIdData = async () => {
    const { data } = await axios.get(`${idUrl}${id}`);
    setIdData(data.meals[0]); // Updating state with fetched details
  };

  useEffect(() => {
    fetchIdData(); // Fetching meal details when the component mounts
  }, []);

  // Function to handle click on close button
  const handleClick = () => {
    setFlag(false); // Setting flag to false
    navigate("/"); // Navigating to home page
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
      <div className="relative top-[9%] md:w-2/5 w-11/12 rounded-2xl h-96 bg-gray-50 p-4 shadow-2xl border border-gray-200">
        <div className="flex justify-end">
          <IoClose
            className="cursor-pointer text-lg hover:scale-105 duration-100 text-gray-600"
            onClick={handleClick} // Handling click to close modal
          />
        </div>

        {(
          <img
            className="h-52 md:h-60 w-full rounded-2xl object-cover"
            src={idData.strMealThumb} // Image of the meal
            alt="err" // Alt text for the image
          />
        ) || <Skeleton />}

        <div className="flex px-2 pt-2">
          {idData.strCategory === "Vegetarian" ? (
            <div className="flex gap-1 items-center font-semibold text-gray-500">
              <IoIosRadioButtonOn className="text-green-600" />{" "}
              {/* Green icon for vegetarian */}
              <span className="text-xs">Veg</span> {/* Veg text */}
            </div>
          ) : (
            <div className="flex gap-1 items-center font-semibold text-gray-500">
              <IoIosRadioButtonOn className="text-red-600" />{" "}
              {/* Red icon for non-vegetarian */}
              <span className="text-xs">Non-veg</span> {/* Non-veg text */}
            </div>
          )}
        </div>

        <div className="px-2 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-700">
            {idData.strMeal || <Skeleton />} {/* Meal name */}
          </h2>
          <button
            className="border border-gray-400 p-2 text-green-600 text-xs flex items-center gap-1 px-4 rounded-md shadow-xl font-bold hover:scale-95 duration-100"
            onClick={handleClick} // Handling click to add meal
          >
            ADD <IoIosAdd className="text-green-500" /> {/* Add icon */}
          </button>
        </div>

        <div className="px-2 text-sm text-gray-700 font-semibold">
          {idData.strTags || <Skeleton />} {/* Tags related to meal */}
        </div>

        <p className="px-2 text-xs py-2 md:py-1 text-gray-500">
          Get a Complimentary Beverage worth ₹100 with this Combo! All other
          offers are valid! {/* Promotional message */}
        </p>
      </div>
    </div>
  );
};

export default FoodModal;
