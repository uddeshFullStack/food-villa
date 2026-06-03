import { API_ENDPOINTS } from "../../constants/api";
import { fetchFirstAvailable } from "../httpClient";
import { mapRestaurantsResponse } from "./mappers";
import type { Restaurant } from "./types";

const RESTAURANT_API_URLS = [
  API_ENDPOINTS.RESTAURANTS_PROXY,
  API_ENDPOINTS.RESTAURANTS,
  API_ENDPOINTS.RESTAURANTS_FALLBACK,
];

const fetchRestaurantsList = (): Promise<Response> => {
  return fetchFirstAvailable(RESTAURANT_API_URLS);
};

const getRestaurants = async (): Promise<Restaurant[]> => {
  const response = await fetchRestaurantsList();
  const json: unknown = await response.json();
  return mapRestaurantsResponse(json);
};

const getRestaurantById = async (
  restaurantId: string
): Promise<Restaurant | null> => {
  const restaurants = await getRestaurants();
  return restaurants.find((r) => r.info.id === String(restaurantId)) ?? null;
};

export { fetchRestaurantsList, getRestaurants, getRestaurantById };
