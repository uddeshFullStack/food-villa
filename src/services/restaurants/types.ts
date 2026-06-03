export interface RestaurantInfo {
  id: string;
  name: string;
  cuisines: string[];
  address?: string;
  imageUrl: string;
  avgRating: number;
}

export interface Restaurant {
  info: RestaurantInfo;
}

export interface RawFakeRestaurant {
  restaurantID: number;
  restaurantName: string;
  type: string;
  address: string;
  parkingLot: boolean;
}

export interface RawDummyJsonProduct {
  id: number;
  title: string;
  brand?: string;
  category?: string;
  description?: string;
  thumbnail?: string;
  rating?: number;
}

export interface RawDummyJsonResponse {
  products: RawDummyJsonProduct[];
}
