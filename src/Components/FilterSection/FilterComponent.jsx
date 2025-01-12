import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChevronDown, X } from "lucide-react";

const url = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";

const FilterComponent = ({ setCountry, setCurrentPage }) => {
  const [data, setData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("Indian");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);
      setData(data.meals);
    } catch (error) {
      console.error("Error fetching areas:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilterChange = (selectedArea) => {
    setSelectedFilter(selectedArea);
    setCountry(selectedArea);
    setCurrentPage(1);
    setDropdownVisible(false);
  };

  return (
    <div className="sticky top-0 bg-white border-b z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="space-y-4">
          <h1 className="text-lg sm:text-xl font-bold text-gray-900">
            Restaurants with online food delivery in Pune
          </h1>

          <div className="relative">
            {/* Mobile View */}
            <div className="sm:hidden">
              <button
                onClick={() => setDropdownVisible(!dropdownVisible)}
                className="w-full flex items-center justify-between px-4 py-2 border rounded-lg shadow-sm bg-white"
              >
                <span>{selectedFilter}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    dropdownVisible ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Desktop View */}
            <div className="hidden sm:flex flex-wrap gap-3">
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

              <button className="px-4 py-2 border rounded-full shadow-sm hover:shadow-md transition-shadow bg-white">
                Fast Delivery
              </button>
              <button className="px-4 py-2 border rounded-full shadow-sm hover:shadow-md transition-shadow bg-white">
                Rating 4.0+
              </button>
              <button className="px-4 py-2 border rounded-full shadow-sm hover:shadow-md transition-shadow bg-white">
                Pure Veg
              </button>
              <button className="px-4 py-2 border rounded-full shadow-sm hover:shadow-md transition-shadow bg-white">
                Rs.300-Rs.600
              </button>
            </div>

            {/* Dropdown Menu */}
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
                <div className="max-h-64 overflow-auto">
                  {data.map((item) => (
                    <button
                      key={item.strArea}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors
                        ${
                          selectedFilter === item.strArea
                            ? "font-semibold bg-gray-50"
                            : ""
                        }`}
                      onClick={() => handleFilterChange(item.strArea)}
                    >
                      {item.strArea}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
