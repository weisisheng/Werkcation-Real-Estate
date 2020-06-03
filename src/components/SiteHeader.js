import React, { Component } from "react";
import { ReactComponent as MenuIcon } from "../assets/MenuIcon.svg";
import Logo from "../assets/Logo.svg";
import { ReactComponent as CrossIcon } from "../assets/CrossIcon.svg";
import SearchIcon from "../assets/SearchIcon.svg";

class siteHeader extends Component {
  state = {
    isOpen: false,
  };

  toggleHandler = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log(this.state.isOpen);
  };

  render() {
    return (
      <header className="bg-gray-900 sm:flex sm:justify-between xl:bg-white">
        <div className=" antialiased px-4 py-3 flex justify-between xl:w-72 xl:bg-gray-900 xl:justify-center xl:py-5">
          <div className="">
            <img src={Logo} alt="Logo" className="h-8 " />
          </div>
          <button onClick={this.toggleHandler} className="sm:hidden">
            {this.state.isOpen ? (
              <CrossIcon className=" fill-current text-gray-500 hover:text-white focus:outline-none focus:outline-none focus:text-white" />
            ) : (
              <MenuIcon className="h-6 w-6 fill-current text-gray-500 hover:text-white focus:outline-none focus:text-white" />
            )}
          </button>
        </div>
        <nav
          className={
            this.state.isOpen
              ? "block"
              : "hidden sm:flex sm:items-center sm:px-4 xl:flex-1 xl:justify-between"
          }
        >
          <div className="hidden xl:block relative w-full max-w-xs ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <img src={SearchIcon} alt="search-icon" />
            </div>
            <input
              placeholder="Search by keywords"
              className="block w-full border border-transparent bg-gray-300 text-gray-900 rounded-lg pl-12 w-56 py-2  focus:outline-none focus:bg-gray-200 focus:border-gray-900"
            />
          </div>
          <div className="sm:flex sm:items-center">
            <div className="px-1 pt-2 pb-5 border-b-2 border-gray-800 sm:flex sm:border-0 sm:items sm:py-0">
              <a
                href="/#"
                className="block px-3 py-1 rounded text-white font-semibold leading-tight hover:bg-gray-800 sm:text-sm xl:text-gray-900"
              >
                List your property
              </a>
              <a
                href="/#"
                className="block px-3 py-1 rounded text-white font-semibold mt-1 leading-tight hover:bg-gray-800 sm:mt-0 sm:text-sm xl:text-gray-900"
              >
                Trips
              </a>
              <a
                href="/#"
                className="block px-3 py-1 rounded text-white font-semibold mt-1 leading-tight hover:bg-gray-800 sm:mt-0 sm:text-sm xl:text-gray-900"
              >
                Messages
              </a>
            </div>
            <div className="px-4 py-5 sm:py-0 sm:px-0">
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                  alt=""
                  className="h-10 w-10 object-cover rounded-full border-2 border-gray-600 sm:h-8 sm:w-8 xl:h-12 xl:w-12"
                />
                <span className="text-gray-200 font-semibold ml-4 sm:hidden">
                  Isla Schoger
                </span>
              </div>
              <div className="mt-5 sm:hidden">
                <a href="/#" className="block text-gray-400 hover:text-white">
                  Account Settings
                </a>
                <a
                  href="/#"
                  className="mt-3 block text-gray-400 hover:text-white"
                >
                  Support
                </a>
                <a
                  href="/#"
                  className="mt-3 block text-gray-400 hover:text-white"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default siteHeader;
