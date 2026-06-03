import { API_ENDPOINTS } from "../../constants/api";
import { imageForRestaurant } from "../../utils/restaurantImages";

function ratingFromId(id) {
  return Math.round((4 + (Number(id) % 8) * 0.1) * 10) / 10;
}

function mapFakeRestaurantApi(list) {
  return list.map((restaurant) => ({
    info: {
      id: String(restaurant.restaurantID),
      name: restaurant.restaurantName,
      cuisines: [restaurant.type],
      address: restaurant.address,
      imageUrl: imageForRestaurant(restaurant.restaurantID),
      avgRating: ratingFromId(restaurant.restaurantID),
    },
  }));
}

function mapDummyJsonProducts(products) {
  return products.map((product) => ({
    info: {
      id: String(product.id),
      name: product.title,
      cuisines: [product.brand, product.category],
      address: product.description?.slice(0, 60),
      imageUrl: product.thumbnail,
      avgRating: product.rating ?? ratingFromId(product.id),
    },
  }));
}

async function fetchJson(url) {
  const response = await fetch(url);
  const contentType = response.headers.get("content-type") || "";
  if (!response.ok || !contentType.includes("application/json")) {
    return null;
  }
  return response;
}

export async function fetchRestaurantsList() {
  const urls = [
    API_ENDPOINTS.RESTAURANTS_PROXY,
    API_ENDPOINTS.RESTAURANTS,
    API_ENDPOINTS.RESTAURANTS_FALLBACK,
  ];

  for (const url of urls) {
    try {
      const response = await fetchJson(url);
      if (response) return response;
    } catch (_) {
      /* try next source */
    }
  }

  throw new Error("Unable to load restaurant data");
}

export function mapRestaurantsResponse(json) {
  if (Array.isArray(json)) {
    return mapFakeRestaurantApi(json);
  }
  if (json?.products) {
    return mapDummyJsonProducts(json.products);
  }
  return [];
}

export async function getRestaurants() {
  const response = await fetchRestaurantsList();
  const json = await response.json();
  return mapRestaurantsResponse(json);
}
