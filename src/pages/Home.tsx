import React, { useEffect, useState } from "react";
import { useOnline } from "../hooks/useOnline";
import { useRestaurants } from "../services/restaurants";
import { useToast } from "../utils/toastHelper";
import { RestaurantList } from "../components/Restaurants/RestaurantList";
import { RestaurantSearch } from "../components/Restaurants/RestaurantSearch";
import { Shimmer } from "../components/Shimmer/Shimmer";
import { SHIMMER_VARIANT } from "../components/Shimmer/config";

export function Home() {
  const isOnline = useOnline();
  const toast = useToast();
  const [searchText, setSearchText] = useState("");
  const { filteredRestaurants, isLoading, searchRestaurants } = useRestaurants();

  useEffect(() => {
    if (!isOnline) {
      toast.error("You are offline", "Check your internet connection.");
    }
  }, [isOnline, toast]);

  if (!isOnline) {
    return (
      <section className="page-shell">
        <div className="status-banner status-banner--offline">
          <h2 className="m-0 text-xl font-bold">You are offline</h2>
          <p className="mt-2 m-0">Please check your connection and try again.</p>
        </div>
      </section>
    );
  }

  if (isLoading) {
    return <Shimmer variant={SHIMMER_VARIANT.RESTAURANT_LIST} />;
  }

  return (
    <section className="page-shell">
      <header className="page-header text-center sm:text-left">
        <h1 className="page-header__title">Top restaurants for you</h1>
        <p className="page-header__subtitle">Discover places to eat and order from the menu.</p>
      </header>
      <RestaurantSearch
        searchText={searchText}
        onSearchTextChange={setSearchText}
        onSearch={() => searchRestaurants(searchText)}
      />
      <RestaurantList restaurants={filteredRestaurants} />
    </section>
  );
}
