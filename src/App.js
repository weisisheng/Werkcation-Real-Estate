import React, { Component } from "react";
import "./styles/main.css";
import Card from "./components/Card";

import SiteHeader from "./components/SiteHeader";
import SearchFilters from "./components/SearchFilters";

class App extends Component {
  state = {
    properties: [
      {
        id: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        beds: 3,
        baths: 2,
        title: "Modern home in city center",
        price: 1400,
        reviewCount: 34,
        rating: 4,
      },
      {
        id: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        beds: 3,
        baths: 2,
        title: "Modern home in city center",
        price: 1400,
        reviewCount: 34,
        rating: 4,
      },
      {
        id: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        beds: 1,
        baths: 2,
        title: "Modern home in city center",
        price: 1400,
        reviewCount: 34,
        rating: 4,
      },
      {
        id: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        beds: 3,
        baths: 2,
        title: "Modern home in city center",
        price: 1400,
        reviewCount: 34,
        rating: 4,
      },
    ],
  };
  render() {
    return (
      <div className="bg-gray-200 min-h-screen xl:flex xl:flex-col xl:h-screen">
        <SiteHeader className="xl:flex-shrink-0" />

        <div className="xl:flex xl:flex-1 ">
          <SearchFilters />
          <main className="px-4 py-6 xl:overflow-x-hidden">
            <h3 className="text-gray-900 text-xl ">Los Angeles</h3>
            <p className="text-gray-600">
              Live like the stars in these luxurious Southern California estates
            </p>
            <div className="sm:flex sm:-mx-2 sm:overflow-x-auto sm:pb-8 ">
              {this.state.properties.map((property) => {
                return (
                  <Card
                    key={property.id}
                    imageUrl={property.imageUrl}
                    beds={property.beds}
                    baths={property.baths}
                    title={property.title}
                    reviewCount={property.reviewCount}
                    price={property.price}
                    rating={property.rating}
                  />
                );
              })}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
