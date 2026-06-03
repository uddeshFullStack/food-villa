import type { RestaurantInfo } from "../services/restaurants/types";

export function imageForRestaurant(id: string | number): string {
  return `https://picsum.photos/seed/restaurant-${id}/400/300`;
}

export function getRestaurantImageUrl(
  info: Pick<RestaurantInfo, "id" | "imageUrl">
): string {
  return info?.imageUrl ?? imageForRestaurant(info?.id ?? "0");
}

/** Fallback for when a menu item image fails to load */
export function getMenuItemFallbackUrl(): string {
  return "https://cdn.dummyjson.com/recipe-images/1.webp";
}
