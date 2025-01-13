import React, { useEffect, useState } from "react";
import axios from "axios"; // Importing axios for making HTTP requests
import { ChevronDown, X } from "lucide-react"; // Importing icons

const url = "https://www.themealdb.com/api/json/v1/1/list.php?a=list"; // URL to fetch list of areas

// Filter and sort restaurants
const FilterComponent = ({ setCountry, setSortFilter, setCurrentPage }) => {
  const [data, setData] = useState([]); // State to store fetched data
  const [selectedFilter, setSelectedFilter] = useState("Indian"); // State to store selected filter
  const [dropdownVisible, setDropdownVisible] = useState(false); // State to control filter dropdown visibility
  const [sortDropdownVisible, setSortDropdownVisible] = useState(false); // State to control sort dropdown visibility
  const [sortOption, setSortOption] = useState("Relevance (Default)"); // State to store selected sort option
  const [areaSelection, setAreaSelection] = useState("Indian"); // State to store area selection

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);
      setData(data.meals); // Updating state with fetched data
    } catch (error) {
      console.error("Error fetching areas:", error); // Logging any errors
    }
  };

  useEffect(() => {
    fetchData(); // Fetching data when the component mounts
  }, []);

  // Function to apply selected filter
  const handleApplyFilter = () => {
    setSelectedFilter(areaSelection); // Updating filter state
    setCountry(areaSelection); // Setting country filter
    setCurrentPage(1); // Resetting to first page
    setDropdownVisible(false); // Hiding dropdown
  };

  // Function to change sort option
  const handleSortChange = (option) => {
    setSortOption(option); // Updating sort option state
    setSortFilter(option); // Setting sort filter
    setSortDropdownVisible(false); // Hiding sort dropdown
  };

  return (
    <div className="sticky top-0 bg-white border-b z-20">
      {" "}
      {/* Sticky header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="space-y-4">
          <h1 className="text-lg sm:text-xl font-bold text-gray-900">
            Restaurants with online food delivery in Pune {/* Title */}
          </h1>

          <div className="relative">
            {/* Desktop View */}
            <div className="hidden sm:flex flex-wrap gap-3">
              {/* Filter Button */}
              <button
                onClick={() => setDropdownVisible(!dropdownVisible)}
                className="flex items-center gap-2 px-4 py-2 border rounded-full shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <span>Filter: {selectedFilter}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    dropdownVisible ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Sort By Button */}
              <button
                onClick={() => setSortDropdownVisible(!sortDropdownVisible)}
                className="flex items-center gap-2 px-4 py-2 border rounded-full shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <span>Sort By: {sortOption}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    sortDropdownVisible ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Placeholder Buttons */}
              <button className="px-4 py-2 border rounded-full shadow-sm hover:shadow-md transition-shadow bg-white">
                Ratings 4.0+
              </button>
              <button className="px-4 py-2 border rounded-full shadow-sm hover:shadow-md transition-shadow bg-white">
                Pure Veg
              </button>
              <button className="px-4 py-2 border rounded-full shadow-sm hover:shadow-md transition-shadow bg-white">
                Less than 300
              </button>
              <button className="px-4 py-2 border rounded-full shadow-sm hover:shadow-md transition-shadow bg-white">
                New on Swiggy
              </button>
              <button className="px-4 py-2 border rounded-full shadow-sm hover:shadow-md transition-shadow bg-white">
                Offers
              </button>
            </div>

            {/* Dropdown for Filter By Area */}
            {dropdownVisible && (
              <div className="absolute left-0 right-0 sm:w-64 mt-2 bg-white border rounded-lg shadow-lg z-30">
                <div className="flex items-center justify-between p-3 border-b">
                  <span className="font-semibold">Select Cuisine</span>
                  <button
                    onClick={() => setDropdownVisible(false)}
                    className="p-1 hover:bg-gray-100 rounded-full"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="max-h-64 overflow-auto p-4">
                  {data.map((item) => (
                    <div key={item.strArea} className="flex items-center mb-2">
                      <input
                        type="radio"
                        id={item.strArea}
                        name="area"
                        value={item.strArea}
                        checked={areaSelection === item.strArea}
                        onChange={(e) => setAreaSelection(e.target.value)}
                        className="mr-2"
                      />
                      <label htmlFor={item.strArea}>{item.strArea}</label>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end p-3 border-t">
                  <button
                    onClick={handleApplyFilter}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}

            {/* Dropdown for Sort By */}
            {sortDropdownVisible && (
              <div className="absolute left-0 right-0 sm:w-64 mt-2 bg-white border rounded-lg shadow-lg z-30">
                <button
                  className="block w-full px-4 py-2 text-left hover:bg-gray-50"
                  onClick={() => handleSortChange("A-Z")}
                >
                  A-Z
                </button>
                <button
                  className="block w-full px-4 py-2 text-left hover:bg-gray-50"
                  onClick={() => handleSortChange("Z-A")}
                >
                  Z-A
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
