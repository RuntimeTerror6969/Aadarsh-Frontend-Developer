import React, { useEffect, useState } from "react";
import { MdStars } from "react-icons/md"; // Importing star icon
import { useNavigate } from "react-router-dom"; // Importing navigation hook
import axios from "axios"; // Importing axios for making HTTP requests

const idUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="; // URL to fetch meal details

// Component to display food items in a grid format
const FoodGrid = ({ items, setFlag }) => {
  const [idDetails, setIdDetails] = useState([]); // State to store meal details
  const [randomRating, setRandomRating] = useState(3); // State to store random rating

  // Function to fetch meal details from the API
  const fetchIdData = async () => {
    const { data } = await axios.get(`${idUrl}${items.idMeal}`);
    setIdDetails(data.meals); // Updating state with fetched details
  };

  useEffect(() => {
    // Generating a random rating between 3 and 5
    const randomDecimal = Math.random() * 2 + 3;
    const rating = parseFloat(randomDecimal.toFixed(1));
    setRandomRating(rating);
    fetchIdData(); // Fetching meal details when the component mounts
  }, []);

  const navigate = useNavigate(); // Hook for navigation
  const handleDetails = () => {
    setFlag(true); // Setting flag to true
    navigate(`/FoodGridModel/${items.idMeal}`, {
      state: {
        item: idDetails, // Passing meal details as state
      },
    });
  };

  return (
    <div
      className="food-item-container flex flex-col gap-2 duration-100 hover:scale-95 cursor-pointer text-gray-700 hover:text-gray-900"
      onClick={handleDetails} // Handling click to navigate to details page
    >
      <div className="rounded-2xl w-full shadow-xl aspect-square overflow-hidden">
        <img
          className="food-image w-full h-full object-cover"
          src={items.strMealThumb} // Image of the meal
          alt={items.strMeal} // Alt text for the image
        />
      </div>
      <div className="md:px-2 font-medium">
        <div>
          <h2 className="truncate">{items.strMeal}</h2> {/* Meal name */}
          <div>
            <p className="flex items-center font-rob">
              <MdStars className="text-green-600" /> {/* Star icon */}
              {randomRating} {/* Displaying random rating */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodGrid;
