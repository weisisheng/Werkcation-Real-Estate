import React from "react";
import { ReactComponent as Star } from "../assets/star.svg";

const card = (props) => {
  const starColor = [];
  for (var i = 0; i < 5; i++) {
    if (i < props.rating) {
      starColor.push("#38B2AC");
    } else {
      starColor.push("gray");
    }
  }
  return (
    <div className="mt-5 sm:w-80 sm:flex-shrink-0 sm:px-2">
      <div className="relative pb-5/6 ">
        <img
          className="rounded-lg shadow-md absolute h-full object-cover "
          src={props.imageUrl}
          alt="villa"
        />
      </div>
      <div className="px-4 -mt-16 relative ">
        <div className="bg-white rounded-lg px-4 py-4 shadow-lg ">
          <div className="flex">
            <span className="bg-teal-200 text-xs text-teal-800 px-3 py-1 rounded-full font-bold uppercase ">
              Plus
            </span>
            <div className="text-xs ml-2 text-gray-600 font-semibold uppercase tracking-wide my-auto">
              {props.beds} {props.beds === 1 ? "BED" : "BEDS"} • {props.baths}{" "}
              {props.baths === 1 ? "BATH" : "BATHS"}
            </div>
          </div>
          <h4 className="text-lg text-gray-900 font-semibold mt-1">
            {props.title}
          </h4>
          <div>
            <span className="text-gray-900">${props.price}</span>
            <span className="text-gray-600 text-sm ml-1">/wk</span>
          </div>
          <div className="text-sm text-gray-600 flex items-center">
            {starColor.map((color) => {
              return <Star fill={color} />;
            })}
            <span className="ml-2 text-xs">{props.reviewCount} Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
