import type { Restaurant } from "../services/restaurants/types";

export function filterRestaurants(
  searchText: string,
  restaurants: Restaurant[]
): Restaurant[] {
  return restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}
