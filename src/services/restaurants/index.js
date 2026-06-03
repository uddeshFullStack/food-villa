import { useCallback, useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import {
  QUERY_KEYS,
  RESTAURANTS_STALE_TIME_MS,
} from "../../constants/api";
import { filterRestaurants } from "../../utils/filterRestaurants";
import { useToast } from "../../utils/toastHelper";
import { getRestaurants } from "./api";

export function useGetRestaurants() {
  const toast = useToast();

  return useQuery([QUERY_KEYS.RESTAURANTS], getRestaurants, {
    staleTime: RESTAURANTS_STALE_TIME_MS,
    onError: (err) => {
      toast.error(
        "Failed to load restaurants",
        err?.message || "Please try again later."
      );
    },
  });
}

export function useRestaurants() {
  const toast = useToast();
  const {
    data: restaurants = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useGetRestaurants();
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  useEffect(() => {
    setFilteredRestaurants(restaurants);
  }, [restaurants]);

  const searchRestaurants = useCallback(
    (searchText) => {
      const results = filterRestaurants(searchText, restaurants);
      setFilteredRestaurants(results);

      if (!searchText.trim()) {
        toast.info("Showing all restaurants", `${results.length} available`);
        return results;
      }

      if (results.length === 0) {
        toast.error("No restaurants found", "Try a different search term.");
      } else {
        toast.success("Search complete", `${results.length} restaurants found`);
      }

      return results;
    },
    [restaurants, toast]
  );

  return {
    restaurants,
    filteredRestaurants,
    isLoading,
    isFetching,
    error,
    isFromCache: isFetching && restaurants.length > 0,
    refetchRestaurants: refetch,
    searchRestaurants,
  };
}

export function useRestaurantById(restaurantId) {
  const query = useGetRestaurants();
  const restaurants = query.data ?? [];
  const restaurant = restaurants.find((r) => r.info.id === restaurantId);

  return {
    restaurant,
    restaurants,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    error: query.error,
    isFromCache: query.isFetching && restaurants.length > 0,
    refetchRestaurants: query.refetch,
  };
}

export function useInvalidateRestaurants() {
  const queryClient = useQueryClient();

  return () =>
    queryClient.invalidateQueries([QUERY_KEYS.RESTAURANTS]);
}
