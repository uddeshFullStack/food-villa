export const API_ENDPOINTS = {
  RESTAURANTS_PROXY: "/restaurant-api/api/Restaurant",
  RESTAURANTS: "https://fakerestaurantapi.runasp.net/api/Restaurant",
  RESTAURANTS_FALLBACK: "https://dummyjson.com/products?limit=30",
};

export const QUERY_KEYS = {
  RESTAURANTS: "restaurants-list",
};

/** React Query: data stays fresh without refetch (ms). */
export const RESTAURANTS_STALE_TIME_MS = 5 * 60 * 1000;

/** React Query: unused cache kept in memory (ms). */
export const RESTAURANTS_CACHE_TIME_MS = 10 * 60 * 1000;
