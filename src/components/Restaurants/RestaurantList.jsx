import React from "react";
import { Link } from "react-router-dom";
import { RestaurantCard } from "./RestaurantCard";

export function RestaurantList({ restaurants }) {
  if (!restaurants?.length) {
    return (
      <p className="text-center text-gray-600">No restaurants found. Try another search.</p>
    );
  }

  return (
    <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2 rounded-md bg-white p-4 shadow-sm">
      {restaurants.map((restaurant) => (
        <Link
          key={restaurant.info.id}
          to={`/restaurant/${restaurant.info.id}`}
          className="no-underline text-inherit"
        >
          <RestaurantCard {...restaurant.info} />
        </Link>
      ))}
    </div>
  );
}
