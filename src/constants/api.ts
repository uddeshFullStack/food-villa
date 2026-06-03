const QUERY_KEYS = {
  RESTAURANTS: "food-villa-restaurants",
  RESTAURANT_BY_ID: "food-villa-restaurant-by-id",
  MENU_CATEGORY: "food-villa-menu-category",
} as const;

const API_ENDPOINTS = {
  RESTAURANTS_PROXY: "/restaurant-api/api/Restaurant",
  RESTAURANTS: "https://fakerestaurantapi.runasp.net/api/Restaurant",
  RESTAURANTS_FALLBACK: "https://dummyjson.com/products?limit=30",
  MEAL_DB_FILTER: (category: string) =>
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
  MEAL_DB_LOOKUP: (id: string) =>
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
} as const;

export { QUERY_KEYS, API_ENDPOINTS };
