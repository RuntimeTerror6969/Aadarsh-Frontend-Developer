// import React, { useEffect, useState } from "react";
// import { MdStars } from "react-icons/md";
// import { BsDot } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const idUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

// const FoodGrid = ({ items, setFlag }) => {
//   const [idDetails, setIdDetails] = useState([]);
//   const [randomRating, setRandomRating] = useState(3);
//   const [randomTime, setRandomTime] = useState(12);

//   const fetchIdData = async () => {
//     const { data } = await axios.get(`${idUrl}${items.idMeal}`);
//     setIdDetails(data.meals);
//   };

//   useEffect(() => {
//     const randomDecimal = Math.random() * 2 + 3;
//     const rating = parseFloat(randomDecimal.toFixed(1));
//     setRandomRating(rating);
//     const randomTimeDecimal = Math.random() * 12 + 12;
//     const time = parseFloat(randomTimeDecimal.toFixed());
//     setRandomTime(time);
//     fetchIdData();
//   }, []);

//   const navigate = useNavigate();

//   const handleDetails = () => {
//     setFlag(true);
//     navigate(`/FoodGridModel/${items.idMeal}`, {
//       state: {
//         item: idDetails,
//       },
//     });
//   };

//   return (
//     <div className="group">
//       <div
//         className="flex flex-col gap-3 w-full sm:w-64 md:w-72 lg:w-80 h-auto duration-200
//                    hover:scale-95 cursor-pointer text-gray-700 hover:text-gray-900
//                    mx-auto transition-all"
//         onClick={handleDetails}
//       >
//         <div className="relative w-full aspect-[4/3] rounded-2xl shadow-lg overflow-hidden">
//           <img
//             className="h-full w-full object-cover transition-transform duration-200
//                      group-hover:scale-105"
//             src={items.strMealThumb}
//             alt={items.strMeal}
//           />
//         </div>

//         <div className="px-2 flex flex-col gap-1">
//           <h2 className="text-base font-medium truncate text-center sm:text-left">
//             {items.strMeal}
//           </h2>

//           <div className="flex items-center justify-center sm:justify-start space-x-1 text-sm">
//             <MdStars className="text-green-600 text-lg" />
//             <span>{randomRating}</span>
//             <BsDot className="text-gray-400" />
//             <span>{randomTime} min</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodGrid;
// import React, { useEffect, useState } from "react";
// import { MdStars } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const idUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

// const FoodGrid = ({ items, setFlag }) => {
//   const [idDetails, setIdDetails] = useState([]);
//   const [randomRating, setRandomRating] = useState(3);
//   const [randomTime, setRandomTime] = useState(12);

//   const fetchIdData = async () => {
//     const { data } = await axios.get(`${idUrl}${items.idMeal}`);
//     setIdDetails(data.meals);
//   };
//   useEffect(() => {
//     const randomDecimal = Math.random() * 2 + 3;
//     const rating = parseFloat(randomDecimal.toFixed(1));
//     setRandomRating(rating);

//     const randomTimeDecimal = Math.random() * 12 + 12;

//     fetchIdData();
//   }, []);

//   const navigate = useNavigate();
//   const handleDetails = () => {
//     setFlag(true);
//     navigate(`/FoodGridModel/${items.idMeal}`, {
//       state: {
//         item: idDetails,
//       },
//     });
//   };

//   // Example usage

//   return (
//     <div
//       className="food-item-container flex flex-col gap-2 duration-100 hover:scale-95 cursor-pointer text-gray-700 hover:text-gray-900"
//       onClick={handleDetails}
//     >
//       <div className="rounded-2xl w-full shadow-xl">
//         <img
//           className="food-image h-40 md:h-32 w-full rounded-2xl shadow-xl"
//           src={items.strMealThumb}
//           alt={items.strMeal}
//         />
//       </div>
//       <div className="md:px-2 font-medium">
//         <div>
//           <h2 className="truncate">{items.strMeal}</h2>
//           <div>
//             <p className="flex items-center font-rob">
//               <MdStars className="text-green-600" />
//               {randomRating}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodGrid;
import React, { useEffect, useState } from "react";
import { MdStars } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const idUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

const FoodGrid = ({ items, setFlag }) => {
  const [idDetails, setIdDetails] = useState([]);
  const [randomRating, setRandomRating] = useState(3);

  const fetchIdData = async () => {
    const { data } = await axios.get(`${idUrl}${items.idMeal}`);
    setIdDetails(data.meals);
  };

  useEffect(() => {
    const randomDecimal = Math.random() * 2 + 3;
    const rating = parseFloat(randomDecimal.toFixed(1));
    setRandomRating(rating);
    fetchIdData();
  }, []);

  const navigate = useNavigate();
  const handleDetails = () => {
    setFlag(true);
    navigate(`/FoodGridModel/${items.idMeal}`, {
      state: {
        item: idDetails,
      },
    });
  };

  return (
    <div
      className="food-item-container flex flex-col gap-2 duration-100 hover:scale-95 cursor-pointer text-gray-700 hover:text-gray-900"
      onClick={handleDetails}
    >
      <div className="rounded-2xl w-full shadow-xl aspect-square overflow-hidden">
        <img
          className="food-image w-full h-full object-cover"
          src={items.strMealThumb}
          alt={items.strMeal}
        />
      </div>
      <div className="md:px-2 font-medium">
        <div>
          <h2 className="truncate">{items.strMeal}</h2>
          <div>
            <p className="flex items-center font-rob">
              <MdStars className="text-green-600" />
              {randomRating}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodGrid;
