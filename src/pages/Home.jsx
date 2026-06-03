import React, { useState } from "react";
import { useOnline } from "../hooks/useOnline";
import { useRestaurants } from "../services/restaurants";
import { RestaurantList } from "../components/Restaurants/RestaurantList";
import { RestaurantSearch } from "../components/Restaurants/RestaurantSearch";
import { Shimmer } from "../components/Shimmer/Shimmer";

export function Home() {
  const isOnline = useOnline();
  const [searchText, setSearchText] = useState("");
  const { filteredRestaurants, isLoading, searchRestaurants } = useRestaurants();

  if (!isOnline) {
    return (
      <div className="rounded-lg bg-red-50 p-6 text-center text-red-700">
        Sorry, you are offline. Please check your connection.
      </div>
    );
  }

  if (isLoading) {
    return <Shimmer />;
  }

  return (
    <section>
      <h1 className="page-title mb-6">Top restaurants for you</h1>
      <RestaurantSearch
        searchText={searchText}
        onSearchTextChange={setSearchText}
        onSearch={() => searchRestaurants(searchText)}
      />
      <RestaurantList restaurants={filteredRestaurants} />
    </section>
  );
}
