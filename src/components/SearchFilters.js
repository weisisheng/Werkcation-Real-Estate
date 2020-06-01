import React, { Component } from "react";
import SearchIcon from "../assets/SearchIcon.svg";
import FilterIcon from "../assets/FilterIcon.svg";

class SearchFilter extends Component {
  state = {
    isOpen: false,
  };

  filterToggleHandler = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <section className="bg-gray-800">
        <div className="flex justify-between px-4 py-3">
          <div className="relative w-full max-w-xs">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <img src={SearchIcon} alt="search-icon" />
            </div>

            <input
              placeholder="Search by keywords"
              className="block w-full bg-gray-900 text-white rounded-lg pl-12 w-56 py-2  focus:outline-none focus:bg-white focus:text-gray-900"
            />
          </div>
          <button
            onClick={this.filterToggleHandler}
            className="ml-2 inline-flex bg-gray-700 rounded-lg shadow pr-4 text-lg items-center pl-3 hover:bg-gray-600 focus:outline-none"
          >
            <img src={FilterIcon} alt="filter icon" />
            <span className="text-white ml-1">Filters</span>
          </button>
        </div>
        {this.state.isOpen && (
          <form>
            <div className=" px-4 py-4 border-2 border-gray-900 sm:flex sm:-mx-2">
              <div className="flex -mx-2 sm:w-1/2 sm:mx-0">
                <label className="block w-1/2 px-2">
                  <span className="text-sm text-gray-500 font-semibold">
                    Bedrooms
                  </span>
                  <select className="mt-1 form-select block w-full bg-gray-700 text-white focus:shadow-none focus:border-transparent focus:bg-gray-600">
                    <option>4</option>
                  </select>
                </label>

                <label className="block w-1/2 px-2">
                  <span className="text-sm text-gray-500 font-semibold shadow ">
                    Bathrooms
                  </span>
                  <select className="mt-1 form-select block w-full bg-gray-700 text-white focus:shadow-none focus:border-transparent focus:bg-gray-600">
                    <option>2</option>
                  </select>
                </label>
              </div>
              <div className="mt-4 sm:w-1/2 sm:mt-0 sm:px-2">
                <label className="block">
                  <span className="text-sm text-gray-500 font-semibold">
                    Price Range
                  </span>
                  <select className="mt-1 form-select block w-full bg-gray-700 text-white focus:shadow-none focus:border-transparent focus:bg-gray-600">
                    <option>Up to $2,000 /wk</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="px-4 py-3 ">
              <span className="text-md text-gray-500 font-semibold">
                Property Type
              </span>
              <div className="sm:flex">
                <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center">
                  <input
                    type="radio"
                    className="form-radio bg-gray-900 border-0"
                    name="proprtyType"
                    value="house"
                  />
                  <span className="ml-2 text-white">House</span>
                </label>
                <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center">
                  <input
                    type="radio"
                    className="form-radio bg-gray-900 border-0"
                    name="proprtyType"
                    value="apartment"
                  />
                  <span className="ml-2 text-white">Apartment</span>
                </label>
                <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center">
                  <input
                    type="radio"
                    className="form-radio bg-gray-900 border-0"
                    name="proprtyType"
                    value="loft"
                  />
                  <span className="ml-2 text-white">Loft</span>
                </label>
                <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center">
                  <input
                    type="radio"
                    className="form-radio bg-gray-900 border-0"
                    name="proprtyType"
                    value="Townhouse"
                  />
                  <span className="ml-2 text-white">Townhouse</span>
                </label>
              </div>
            </div>
            <div className="px-4 py-4 border-t-2 border-gray-900">
              <span className="text-md text-gray-500 font-semibold">
                Amenities
              </span>
              <div className="sm:flex sm:flex-wrap sm:-mx-2">
                <label className="mt-2 flex items-center sm:w-1/4 sm:px-2">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    name="balcony"
                  />
                  <span className="ml-3 text-white">Balcony</span>
                </label>
                <label className="mt-2 flex items-center sm:w-1/4 sm:px-2">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    name="airConditioning"
                  />
                  <span className="ml-3 text-white">Air Conditioning</span>
                </label>
                <label className="mt-2 flex items-center sm:w-1/4 sm:px-2">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    name="pool"
                  />
                  <span className="ml-3 text-white">Pool</span>
                </label>
                <label className="mt-2 flex items-center sm:w-1/4 sm:px-2">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    name="beach"
                  />
                  <span className="ml-3 text-white">Beach</span>
                </label>
                <label className="mt-2 flex items-center sm:w-1/4 sm:px-2">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    name="petFriendly"
                  />
                  <span className="ml-3 text-white">Pet friendly</span>
                </label>
                <label className="mt-2 flex items-center sm:w-1/4 sm:px-2">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    name="kidFriendly"
                  />
                  <span className="ml-3 text-white">Kid Friendly</span>
                </label>
                <label className="mt-2 flex items-center sm:w-1/4 sm:px-2">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    name="parking"
                  />
                  <span className="ml-3 text-white">Parking</span>
                </label>
              </div>
            </div>
            <div className="px-4 py-4 bg-gray-900 sm:text-right">
              <button
                type="button"
                className="text-white font-semibold hover:bg-indigo-400 bg-indigo-500 py-2 w-full rounded-lg sm:w-auto sm:px-4"
              >
                Update results
              </button>
            </div>
          </form>
        )}
      </section>
    );
  }
}

export default SearchFilter;
