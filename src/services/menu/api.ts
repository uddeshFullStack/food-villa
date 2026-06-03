import { API_ENDPOINTS } from "../../constants/api";
import type {
  MenuCategory,
  MenuItem,
  RawMealFilterItem,
  RawMealFilterResponse,
  RestaurantMenu,
} from "./types";

const MENU_CATEGORIES: Array<{ label: string; apiCategory: string }> = [
  { label: "Starters", apiCategory: "Starter" },
  { label: "Seafood", apiCategory: "Seafood" },
  { label: "Pasta & Noodles", apiCategory: "Pasta" },
  { label: "Desserts", apiCategory: "Dessert" },
];

const ITEMS_PER_CATEGORY = 6;

function derivePriceFromId(id: string): number {
  const n = parseInt(id, 10) || 0;
  return Math.round((5 + (n % 20) * 0.99) * 100) / 100;
}

function mapMealToMenuItem(
  raw: RawMealFilterItem,
  category: string
): MenuItem {
  return {
    id: raw.idMeal,
    name: raw.strMeal,
    imageUrl: raw.strMealThumb,
    price: derivePriceFromId(raw.idMeal),
    category,
  };
}

async function fetchMealsByCategory(
  apiCategory: string,
  label: string
): Promise<MenuCategory> {
  const response = await fetch(API_ENDPOINTS.MEAL_DB_FILTER(apiCategory));

  if (!response.ok) {
    return { label, apiCategory, items: [] };
  }

  const data: RawMealFilterResponse = await response.json();
  const meals = (data.meals ?? []).slice(0, ITEMS_PER_CATEGORY);

  return {
    label,
    apiCategory,
    items: meals.map((m) => mapMealToMenuItem(m, label)),
  };
}

export async function getRestaurantMenu(): Promise<RestaurantMenu> {
  const categories = await Promise.all(
    MENU_CATEGORIES.map(({ label, apiCategory }) =>
      fetchMealsByCategory(apiCategory, label)
    )
  );

  return categories.filter((c) => c.items.length > 0);
}
