/** Raw shape returned by TheMealDB filter endpoint */
export interface RawMealFilterItem {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface RawMealFilterResponse {
  meals: RawMealFilterItem[] | null;
}

/** Raw shape returned by TheMealDB lookup endpoint */
export interface RawMealDetail {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
}

/** Normalised menu item shape used throughout the app */
export interface MenuItem {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  category: string;
  area?: string;
}

/** One category row in the restaurant menu */
export interface MenuCategory {
  label: string;
  apiCategory: string;
  items: MenuItem[];
}

/** Full menu for a restaurant (list of categories) */
export type RestaurantMenu = MenuCategory[];
