import React, { useState } from "react";
import FilterComponent from "../Components/FilterSection/FilterComponent"; // Importing FilterComponent
import FoodItems from "../Components/FoodItems/FoodItems"; // Importing FoodItems component
import { useParams } from "react-router-dom"; // Importing hook to get URL parameters
import FoodModal from "../Components/Modal/FoodModal"; // Importing FoodModal component

const Home = () => {
  const [country, setCountry] = useState("Indian"); // State to store selected country filter
  const [sortFilter, setSortFilter] = useState("Relevance (Default)"); // State to store sorting filter
  const [currentPage, setCurrentPage] = useState(1); // State to manage pagination
  const [Flag, setFlag] = useState(false); // State to manage modal visibility
  const { id } = useParams(); // Hook to get URL parameter 'id'

  return (
    <div className="font-pop pt-20">
      {" "}
      {/* Main container with padding */}
      <FilterComponent
        setCountry={setCountry}
        setSortFilter={setSortFilter}
        setCurrentPage={setCurrentPage}
      />{" "}
      {/* Filter component for setting filters */}
      <FoodItems
        country={country}
        setFlag={setFlag}
        sortFilter={sortFilter}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />{" "}
      {/* Food items component to display food items based on filters */}
      {id !== undefined && Flag && <FoodModal id={id} setFlag={setFlag} />}{" "}
      {/* Modal for displaying food details */}
    </div>
  );
};

export default Home;
