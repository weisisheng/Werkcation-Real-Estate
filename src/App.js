import React, { Component } from "react";
import "./styles/main.css";
import Card from "./components/Card";

import SiteHeader from "./components/SiteHeader";
import SearchFilters from "./components/SearchFilters";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <SiteHeader />
        <SearchFilters />
        <div className="bg-gray-200 min-h-screen">
          <main className="px-4 py-6">
            <h3 className="text-gray-900 text-xl ">Los Angeles</h3>
            <p className="text-gray-600">
              Live like the stars in these luxurious Southern California estates
            </p>
            <div className="sm:flex sm:-mx-2 sm:overflow-x-auto sm:pb-8 ">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default App;
