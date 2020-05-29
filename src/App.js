import React from "react";
import "./styles/main.css";
import MenuIcon from "./assets/MenuIcon.svg";
import Logo from "./assets/Logo.svg";
import SearchIcon from "./assets/SearchIcon.svg";
import FilterIcon from "./assets/FilterIcon.svg";
import Star from "./assets/star.svg";
function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <header className="bg-gray-900 antialiased px-4 py-3 flex justify-between">
        <img src={Logo} alt="Logo" />
        <button>
          <img src={MenuIcon} alt="menu-icon" className="h-6 w-6" />
        </button>
      </header>
      <section className="bg-gray-800 flex justify-between px-4 py-3">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <img src={SearchIcon} alt="search-icon" />
          </div>

          <input
            placeholder="Search by keywords"
            className="bg-gray-900 text-white rounded-lg pl-12 py-2 focus:outline-none focus:bg-white focus:text-gray-900"
          />
        </div>
        <button className="inline-flex bg-gray-700 rounded-lg shadow pr-4 pl-3 hover:bg-gray-600 focus:outline-none">
          <img src={FilterIcon} alt="filter icon" />
          <span className="text-white ml-1">Filters</span>
        </button>
      </section>
      <main className="px-4 py-6">
        <h3 className="text-gray-900 text-xl ">Los Angeles</h3>
        <p className="text-gray-600">
          Live like the stars in these luxurious Southern California estates
        </p>
        <div className="mt-5">
          <div>
            <img
              className="rounded-lg shadow-md h-64"
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
      </main>
    </div>
  );
}

export default App;
