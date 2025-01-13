import React, { useEffect, useState } from "react";
import axios from "axios"; // Importing axios for making HTTP requests
import FoodGrid from "./FoodGrid.jsx"; // Importing FoodGrid component
import Pagination from "../Pagination/Pagination"; // Importing Pagination component
import CartSkeleton from "../Additional/CartSkeleton"; // Importing CartSkeleton for loading state

const url = "https://www.themealdb.com/api/json/v1/1/filter.php?a="; // URL to fetch food items based on country

// Component to display food items with sorting and pagination
const FoodItems = ({
  country,
  setFlag,
  sortFilter,
  currentPage,
  setCurrentPage,
}) => {
  const [foodData, setFoodData] = useState([]); // State to store fetched food items
  const [sortedData, setSortedData] = useState([]); // State to store sorted food items
  const [isLoading, setIsLoading] = useState(true); // State to manage loading state

  // Pagination
  const [mealPerPage] = useState(8); // Items per page

  // Function to fetch food items from the API
  const fetchData = async () => {
    try {
      setIsLoading(true); // Setting loading state to true
      const { data } = await axios.get(`${url}${country}`);
      // Add random ratings to each meal item
      const updatedMeals = data.meals.map((meal) => ({
        ...meal,
        rating: (Math.random() * 2 + 3).toFixed(1), // Ratings between 3.0 and 5.0
      }));
      setFoodData(updatedMeals); // Updating state with fetched food items
      setIsLoading(false); // Setting loading state to false
    } catch (error) {
      console.error("Error fetching food items:", error); // Logging any errors
      setIsLoading(false); // Setting loading state to false
    }
  };

  useEffect(() => {
    fetchData(); // Fetching food items when the component mounts or country changes
  }, [country]);

  useEffect(() => {
    const sortData = () => {
      let newData = [...foodData];
      if (sortFilter === "A-Z") {
        newData.sort((a, b) => a.strMeal.localeCompare(b.strMeal)); // Sorting data alphabetically A-Z
      } else if (sortFilter === "Z-A") {
        newData.sort((a, b) => b.strMeal.localeCompare(a.strMeal)); // Sorting data alphabetically Z-A
      }
      setSortedData(newData); // Updating state with sorted data
    };
    sortData();
  }, [sortFilter, foodData]);

  // Pagination logic
  const lastPostIndex = currentPage * mealPerPage; // Calculating last post index
  const firstPostIndex = lastPostIndex - mealPerPage; // Calculating first post index
  const paginatedData = sortedData.slice(firstPostIndex, lastPostIndex); // Slicing sorted data for current page

  return (
    <>
      <div className="px-4 py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {isLoading && <CartSkeleton carts={8} />}{" "}
          {/* Displaying skeleton loader if loading */}
          {!isLoading &&
            paginatedData.map((items) => (
              <FoodGrid key={items.idMeal} setFlag={setFlag} items={items} />
            ))}{" "}
          {/* Displaying paginated food items */}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Pagination
          totalPost={sortedData.length} // Total posts
          currentPage={currentPage} // Current page
          mealPerPage={mealPerPage} // Items per page
          setCurrentPage={setCurrentPage} // Function to set current page
        />
      </div>
    </>
  );
};

export default FoodItems;
