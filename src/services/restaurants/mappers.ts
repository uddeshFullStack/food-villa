import { imageForRestaurant } from "../../utils/restaurantImages";
import type {
  RawDummyJsonProduct,
  RawDummyJsonResponse,
  RawFakeRestaurant,
  Restaurant,
} from "./types";

function ratingFromId(id: number | string): number {
  return Math.round((4 + (Number(id) % 8) * 0.1) * 10) / 10;
}

function mapFakeRestaurantApi(list: RawFakeRestaurant[]): Restaurant[] {
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

function mapDummyJsonProducts(products: RawDummyJsonProduct[]): Restaurant[] {
  return products.map((product) => ({
    info: {
      id: String(product.id),
      name: product.title,
      cuisines: [product.brand, product.category].filter(Boolean) as string[],
      address: product.description?.slice(0, 60),
      imageUrl: product.thumbnail ?? imageForRestaurant(product.id),
      avgRating: product.rating ?? ratingFromId(product.id),
    },
  }));
}

export function mapRestaurantsResponse(
  json: RawFakeRestaurant[] | RawDummyJsonResponse | unknown
): Restaurant[] {
  if (Array.isArray(json)) {
    return mapFakeRestaurantApi(json as RawFakeRestaurant[]);
  }
  if (json && typeof json === "object" && "products" in json) {
    return mapDummyJsonProducts(
      (json as RawDummyJsonResponse).products
    );
  }
  return [];
}
