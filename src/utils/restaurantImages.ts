import type { RestaurantInfo } from "../services/restaurants/types";

export function imageForRestaurant(id: string | number): string {
  return `https://picsum.photos/seed/restaurant-${id}/400/300`;
}

export function getRestaurantImageUrl(
  info: Pick<RestaurantInfo, "id" | "imageUrl">
): string {
  return info?.imageUrl ?? imageForRestaurant(info?.id ?? "0");
}

export function getMenuItemImageUrl(
  itemName: string,
  category = "menu"
): string {
  const seed = `${category}-${itemName}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");
  return `https://picsum.photos/seed/food-${seed}/400/300`;
}
