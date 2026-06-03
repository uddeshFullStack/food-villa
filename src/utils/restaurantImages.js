export function imageForRestaurant(id) {
  return `https://picsum.photos/seed/restaurant-${id}/400/300`;
}

export function getRestaurantImageUrl(info) {
  return info?.imageUrl ?? imageForRestaurant(info?.id ?? "0");
}

export function getMenuItemImageUrl(itemName, category = "menu") {
  const seed = `${category}-${itemName}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");
  return `https://picsum.photos/seed/food-${seed}/400/300`;
}
