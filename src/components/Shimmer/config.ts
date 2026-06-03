export const SHIMMER_VARIANT = {
  RESTAURANT_LIST: "restaurant-list",
  MENU_PAGE: "menu-page",
} as const;

export type ShimmerVariant = (typeof SHIMMER_VARIANT)[keyof typeof SHIMMER_VARIANT];

export const SHIMMER_COUNT = {
  RESTAURANT_LIST: 12,
  MENU_ITEM: 4,
} as const;
