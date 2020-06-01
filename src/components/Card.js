import React from "react";
import Star from "../assets/star.svg";

const card = () => {
  return (
    <div className="mt-5 sm:max-w-xs sm:flex-shrink-0 sm:w-full sm:px-2">
      <div className="relative pb-5/6 ">
        <img
          className="rounded-lg shadow-md absolute h-full object-cover "
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
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
              3 BEDS • 2 BATHS
            </div>
          </div>
          <h4 className="text-lg text-gray-900 font-semibold mt-1">
            Modern home in city center
          </h4>
          <div>
            <span className="text-gray-900">$1,400</span>
            <span className="text-gray-600 text-sm ml-1">/wk</span>
          </div>
          <div className="text-sm text-gray-600 flex items-center">
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <span className="ml-2 text-xs">34 Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
