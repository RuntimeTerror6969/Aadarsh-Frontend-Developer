import React, { useState } from "react";
import FilterComponent from "../Components/FilterSection/FilterComponent";
import FoodItems from "../Components/FoodItems/FoodItems";
import { useParams } from "react-router-dom";
import FoodModal from "../Components/Modal/FoodModal";

const Home = () => {
  const [country, setCountry] = useState("Indian");
  const [sortFilter, setSortFilter] = useState("Relevance (Default)");

  const [currentPage, setCurrentPage] = useState(1);
  const [Flag, setFlag] = useState(false);
  const { id } = useParams();

  return (
    <div className="font-pop pt-20">
      <FilterComponent
        setCountry={setCountry}
        setSortFilter={setSortFilter}
        setCurrentPage={setCurrentPage}
      />

      <FoodItems
        country={country}
        setFlag={setFlag}
        sortFilter={sortFilter}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {id !== undefined && Flag && <FoodModal id={id} setFlag={setFlag} />}
    </div>
  );
};

export default Home;
