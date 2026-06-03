const QUERY_KEYS = {
  RESTAURANTS: "food-villa-restaurants",
  RESTAURANT_BY_ID: "food-villa-restaurant-by-id",
} as const;

const API_ENDPOINTS = {
  RESTAURANTS_PROXY: "/restaurant-api/api/Restaurant",
  RESTAURANTS: "https://fakerestaurantapi.runasp.net/api/Restaurant",
  RESTAURANTS_FALLBACK: "https://dummyjson.com/products?limit=30",
} as const;

export { QUERY_KEYS, API_ENDPOINTS };
