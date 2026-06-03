import { useCallback, useEffect, useState } from "react";
import { getRestaurants } from "./api";
import { filterRestaurants } from "../../utils/filterRestaurants";

export function useRestaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getRestaurants();
        if (!cancelled) {
          setRestaurants(data);
          setFilteredRestaurants(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err);
          console.error("Failed to load restaurants:", err);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const searchRestaurants = useCallback(
    (searchText) => {
      setFilteredRestaurants(filterRestaurants(searchText, restaurants));
    },
    [restaurants]
  );

  return {
    restaurants,
    filteredRestaurants,
    isLoading,
    error,
    searchRestaurants,
  };
}

export function useRestaurantById(restaurantId) {
  const { restaurants, isLoading, error } = useRestaurants();
  const restaurant = restaurants.find((r) => r.info.id === restaurantId);

  return { restaurant, restaurants, isLoading, error };
}
