// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import FoodGrid from "./FoodGrid.jsx";
// import Pagination from "../Pagination/Pagination";
// import CartSkeleton from "../Additional/CartSkeleton";

// const url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=";

// const FoodItems = ({
//   country,
//   setFlag,
//   sortFilter,
//   currentPage,
//   setCurrentPage,
// }) => {
//   const [foodData, setFoodData] = useState([]);
//   const [sortedData, setSortedData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [mealPerPage] = useState(6);

//   const fetchData = async () => {
//     try {
//       const { data } = await axios.get(`${url}${country}`);
//       setFoodData(data.meals);
//       setIsLoading(false);
//     } catch (error) {
//       console.error("Error fetching food data:", error);
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     setIsLoading(true);
//     fetchData();
//   }, [country]);

//   useEffect(() => {
//     const sortData = () => {
//       const newData = [...foodData];
//       if (sortFilter === "A-Z Sort") {
//         newData.sort((a, b) => a.strMeal.localeCompare(b.strMeal));
//       } else if (sortFilter === "Z-A Sort") {
//         newData.sort((a, b) => b.strMeal.localeCompare(a.strMeal));
//       }
//       setSortedData(newData);
//     };
//     sortData();
//   }, [sortFilter, foodData]);

//   const lastPostIndex = currentPage * mealPerPage;
//   const firstPostIndex = lastPostIndex - mealPerPage;
//   const paginatedData = sortedData.slice(firstPostIndex, lastPostIndex);

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       <main className="flex-grow px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
//         <div className="py-8 sm:py-10">
//           {isLoading ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-12">
//               <CartSkeleton carts={8} />
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
//               {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-12"> */}
//               {paginatedData.map((items) => (
//                 <div
//                   key={items.idMeal}
//                   className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
//                 >
//                   <FoodGrid setFlag={setFlag} items={items} />
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         <div className="py-8 flex justify-center">
//           <Pagination
//             totalPost={sortedData.length}
//             currentPage={currentPage}
//             mealPerPage={mealPerPage}
//             setCurrentPage={setCurrentPage}
//           />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default FoodItems;
import React, { useEffect, useState } from "react";
import axios from "axios";
import FoodGrid from "./FoodGrid.jsx";
import Pagination from "../Pagination/Pagination";
import CartSkeleton from "../Additional/CartSkeleton";

const url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=";

const FoodItems = ({
  country,
  setFlag,
  sortFilter,
  currentPage,
  setCurrentPage,
}) => {
  const [foodData, setFoodData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Pagination

  const [mealPerPage] = useState(8);

  const fetchData = async () => {
    const { data } = await axios.get(`${url}${country}`);

    setFoodData(data.meals);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [country]);

  useEffect(() => {
    const sortData = () => {
      let newData = [...foodData];
      if (sortFilter === "A-Z Sort") {
        newData.sort((a, b) => a.strMeal.localeCompare(b.strMeal));
      } else if (sortFilter === "Z-A Sort")
        newData.sort((a, b) => b.strMeal.localeCompare(a.strMeal));

      setSortedData(newData);
    };
    sortData();
  }, [sortFilter, foodData]);

  // this is for the pagination purpose
  const lastPostIndex = currentPage * mealPerPage;
  const firstPostIndex = lastPostIndex - mealPerPage;
  const paginatedData = sortedData.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className="px-4 py-5">
        <div className="grid-layout">
          {isLoading && <CartSkeleton carts={8} />}
          {paginatedData.map((items) => (
            <FoodGrid key={items.idMeal} setFlag={setFlag} items={items} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Pagination
          totalPost={sortedData.length}
          currentPage={currentPage}
          mealPerPage={mealPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default FoodItems;
