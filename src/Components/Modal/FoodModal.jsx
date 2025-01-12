// import axios from 'axios';
// import React, { useState, useEffect } from 'react'
// // import { LuSettings2 } from "react-icons/lu";
// import { IoClose } from 'react-icons/io5';
// import { useNavigate } from 'react-router-dom';
// import { IoIosRadioButtonOn } from "react-icons/io";
// import { IoIosAdd } from "react-icons/io";
// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'

// const idUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
// const FoodModal = ({ id, setFlag }) => {
//   const [idData, setIdData] = useState({})
//   const navigate = useNavigate();

//   const fetchIdData = async () => {
//     const { data } = await axios.get(`${idUrl}${id}`)
//     setIdData(data.meals[0])

//   }
//   useEffect(() => {
//     fetchIdData();

//   }, [])

//   const handleClick = () => {
//     setFlag(false);

//     navigate('/')

//   }

//   return (
//     <div className='foodModal'>

//       <div className='md:w-2/5 rounded-2xl h-96 bg-white p-4'>
//         <div className='flex justify-end'>

//         <IoClose className=' right-1/3 cursor-pointer text-lg hover:scale-105 duration-100' onClick={handleClick} />
//         </div>
//         {
//           <img className='h-52 md:h-60 w-full rounded-2xl' src={idData.strMealThumb} alt="err" /> || <Skeleton />}

//         <div className='flex  px-2 pt-2 '>
//           {
//             idData.strCategory === "Vegetarian" ? <div className='flex gap-1 items-center font-semibold text-gray-500  '> < IoIosRadioButtonOn className='text-green-600' /><span className='text-xs'>Veg</span> </div > : <div className='flex gap-1 items-center font-semibold text-gray-500  '> <IoIosRadioButtonOn className='text-red-600' /><span className='text-xs'>Non-veg</span></div>

//           }
//         </div>

//         <div className='px-2 flex justify-between items-center'>
//           <h2 className='text-lg font-bold text-gray-700'>{idData.strMeal || <Skeleton />}</h2>
//           <button className='border border-gray-400 p-2 text-green-600 text-xs flex px-4 rounded-md shadow-xl font-bold hover:scale-95 duration-100' onClick={handleClick}>ADD <IoIosAdd className='text-green-500' /> </button>
//         </div>
//         <div className='px-2 text-sm text-gray-700 font-semibold'>
//           {idData.strTags || <Skeleton />}
//         </div>
//         <p className=' px-2 text-xs py-2 md:py-1 text-gray-500 '>Get Chocolava Cake worth Rs100 FREE. All other offers applicable on this combo.</p>
//         {/* <button onClick={handleClick}>ADD</button> */}

//       </div>

//     </div>
//   )
// }

// export default FoodModal

// import axios from "axios";
// import React, { useState, useEffect } from "react";
// // import { LuSettings2 } from "react-icons/lu";
// import { IoClose } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";
// import { IoIosRadioButtonOn } from "react-icons/io";
// import { IoIosAdd } from "react-icons/io";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

// const idUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
// const FoodModal = ({ id, setFlag }) => {
//   const [idData, setIdData] = useState({});
//   const navigate = useNavigate();

//   const fetchIdData = async () => {
//     const { data } = await axios.get(`${idUrl}${id}`);
//     setIdData(data.meals[0]);
//   };
//   useEffect(() => {
//     fetchIdData();
//   }, []);

//   const handleClick = () => {
//     setFlag(false);

//     navigate("/");
//   };

//   return (
//     <div className="foodModal relative mt-8">
//       <div className="md:w-2/5 rounded-2xl h-96 bg-white p-4">
//         <div className="flex justify-end">
//           <IoClose
//             className=" right-1/3 cursor-pointer text-lg hover:scale-105 duration-100"
//             onClick={handleClick}
//           />
//         </div>
//         {(
//           <img
//             className="h-52 md:h-60 w-full rounded-2xl"
//             src={idData.strMealThumb}
//             alt="err"
//           />
//         ) || <Skeleton />}
//         <div className="flex  px-2 pt-2 ">
//           {idData.strCategory === "Vegetarian" ? (
//             <div className="flex gap-1 items-center font-semibold text-gray-500  ">
//               {" "}
//               <IoIosRadioButtonOn className="text-green-600" />
//               <span className="text-xs">Veg</span>{" "}
//             </div>
//           ) : (
//             <div className="flex gap-1 items-center font-semibold text-gray-500  ">
//               {" "}
//               <IoIosRadioButtonOn className="text-red-600" />
//               <span className="text-xs">Non-veg</span>
//             </div>
//           )}
//         </div>
//         <div className="px-2 flex justify-between items-center">
//           <h2 className="text-lg font-bold text-gray-700">
//             {idData.strMeal || <Skeleton />}
//           </h2>
//           <button
//             className="border border-gray-400 p-2 text-green-600 text-xs flex px-4 rounded-md shadow-xl font-bold hover:scale-95 duration-100"
//             onClick={handleClick}
//           >
//             ADD <IoIosAdd className="text-green-500" />{" "}
//           </button>
//         </div>
//         <div className="px-2 text-sm text-gray-700 font-semibold">
//           {idData.strTags || <Skeleton />}
//         </div>
//         <p className=" px-2 text-xs py-2 md:py-1 text-gray-500 ">
//           Get Chocolava Cake worth Rs100 FREE. All other offers applicable on
//           this combo.
//         </p>
//         {/* <button onClick={handleClick}>ADD</button> */}
//       </div>
//     </div>
//   );
// };

// export default FoodModal;
import axios from "axios";
import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoIosRadioButtonOn } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const idUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

const FoodModal = ({ id, setFlag }) => {
  const [idData, setIdData] = useState({});
  const navigate = useNavigate();

  const fetchIdData = async () => {
    const { data } = await axios.get(`${idUrl}${id}`);
    setIdData(data.meals[0]);
  };

  useEffect(() => {
    fetchIdData();
  }, []);

  const handleClick = () => {
    setFlag(false);
    navigate("/");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
      <div className="relative top-[9%] md:w-2/5 w-11/12 rounded-2xl h-96 bg-gray-50 p-4 shadow-2xl border border-gray-200">
        <div className="flex justify-end">
          <IoClose
            className="cursor-pointer text-lg hover:scale-105 duration-100 text-gray-600"
            onClick={handleClick}
          />
        </div>

        {(
          <img
            className="h-52 md:h-60 w-full rounded-2xl object-cover"
            src={idData.strMealThumb}
            alt="err"
          />
        ) || <Skeleton />}

        <div className="flex px-2 pt-2">
          {idData.strCategory === "Vegetarian" ? (
            <div className="flex gap-1 items-center font-semibold text-gray-500">
              <IoIosRadioButtonOn className="text-green-600" />
              <span className="text-xs">Veg</span>
            </div>
          ) : (
            <div className="flex gap-1 items-center font-semibold text-gray-500">
              <IoIosRadioButtonOn className="text-red-600" />
              <span className="text-xs">Non-veg</span>
            </div>
          )}
        </div>

        <div className="px-2 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-700">
            {idData.strMeal || <Skeleton />}
          </h2>
          <button
            className="border border-gray-400 p-2 text-green-600 text-xs flex items-center gap-1 px-4 rounded-md shadow-xl font-bold hover:scale-95 duration-100"
            onClick={handleClick}
          >
            ADD <IoIosAdd className="text-green-500" />
          </button>
        </div>

        <div className="px-2 text-sm text-gray-700 font-semibold">
          {idData.strTags || <Skeleton />}
        </div>

        <p className="px-2 text-xs py-2 md:py-1 text-gray-500">
          Get Chocolava Cake worth Rs100 FREE. All other offers applicable on
          this combo.
        </p>
      </div>
    </div>
  );
};

export default FoodModal;
