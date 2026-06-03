export function imageForRestaurant(id) {
  return `https://picsum.photos/seed/restaurant-${id}/400/300`;
}

export function getRestaurantImageUrl(info) {
  return info?.imageUrl ?? imageForRestaurant(info?.id ?? "0");
}
