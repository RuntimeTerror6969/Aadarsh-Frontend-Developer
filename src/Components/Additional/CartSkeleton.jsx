import React from "react";
import Skeleton from "react-loading-skeleton"; // Importing the Skeleton component for loading animation

const CartSkeleton = ({ carts }) => {
  return (
    // Create an array with the number of skeletons needed and map through it to display each skeleton
    Array(carts)
      .fill(0)
      .map((items, i) => (
        <div key={i} className="flex flex-col gap-3 ">
          <div className=" ">
            <Skeleton width={190} height={125} /> {/* Skeleton for the image */}
          </div>
          <div>
            <div className="">
              <Skeleton width={80} /> {/* Skeleton for the first text line */}
            </div>
            <div className="">
              <Skeleton width={100} /> {/* Skeleton for the second text line */}
            </div>
          </div>
        </div>
      ))
  );
};

export default CartSkeleton; // Exporting the CartSkeleton component for use in other parts of the app
