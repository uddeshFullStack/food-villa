import { useCallback, useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import type { UseQueryOptions } from "react-query";
import { QUERY_KEYS } from "../../constants/api";
import { filterRestaurants } from "../../utils/filterRestaurants";
import { useToast } from "../../utils/toastHelper";
import { getRestaurants } from "./api";
import type { Restaurant } from "./types";

const restaurantsQueryKey = [QUERY_KEYS.RESTAURANTS] as const;

const STALE_TIME = 5 * 60 * 1000;
const CACHE_TIME = 30 * 60 * 1000;

type RestaurantsQueryOptions<TData = Restaurant[]> = Omit<
  UseQueryOptions<Restaurant[], Error, TData, readonly [string]>,
  "queryKey" | "queryFn"
>;

/**
 * Base query — single cache key, single network request.
 * Pattern: comms-mfe useCustomFields / useGetUsers
 */
export const useGetRestaurants = <TData = Restaurant[]>(
  options: RestaurantsQueryOptions<TData> = {}
) => {
  const toast = useToast();

  return useQuery(restaurantsQueryKey, getRestaurants, {
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retry: 1,
    keepPreviousData: true,
    ...options,
    onError: (err: Error) => {
      toast.error(
        "Failed to load restaurants",
        err?.message ?? "Please try again later."
      );
      options.onError?.(err);
    },
    onSuccess: (data: TData) => {
      options.onSuccess?.(data);
    },
  });
};

/**
 * Single restaurant via select on the shared list cache — no second API call.
 * Pattern: comms-mfe hooks using select to derive data from list queries.
 */
export const useGetRestaurantById = (
  restaurantId: string,
  options: RestaurantsQueryOptions<Restaurant | null> = {}
) => {
  const { enabled = Boolean(restaurantId), ...restOptions } = options;

  return useGetRestaurants<Restaurant | null>({
    enabled,
    ...restOptions,
    select: (list) =>
      list.find((item) => item.info.id === String(restaurantId)) ?? null,
  });
};

/**
 * Restaurant list + client-side search.
 * Returns React Query isLoading / isFetching directly — no custom cache flags.
 */
export const useRestaurants = () => {
  const toast = useToast();
  const query = useGetRestaurants();
  const restaurants = query.data ?? [];
  const [filteredRestaurants, setFilteredRestaurants] =
    useState<Restaurant[]>(restaurants);

  useEffect(() => {
    setFilteredRestaurants(restaurants);
  }, [restaurants]);

  const searchRestaurants = useCallback(
    (searchText: string) => {
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
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,
    error: query.error,
    refetchRestaurants: query.refetch,
    searchRestaurants,
  };
};

/**
 * Manual cache operations — invalidate, refetch, prefetch.
 * Pattern: comms-mfe useQueryClient for cache mutations.
 */
export const useRestaurantsCache = () => {
  const queryClient = useQueryClient();

  const invalidate = useCallback(
    () => queryClient.invalidateQueries(restaurantsQueryKey),
    [queryClient]
  );

  const refetch = useCallback(
    () => queryClient.refetchQueries(restaurantsQueryKey, { active: true }),
    [queryClient]
  );

  const prefetch = useCallback(
    () =>
      queryClient.prefetchQuery(restaurantsQueryKey, getRestaurants, {
        staleTime: STALE_TIME,
      }),
    [queryClient]
  );

  return { invalidate, refetch, prefetch };
};

export const useInvalidateRestaurants = () => {
  const { invalidate } = useRestaurantsCache();
  return invalidate;
};

export const useRefetchRestaurants = () => {
  const { refetch } = useRestaurantsCache();
  return refetch;
};
