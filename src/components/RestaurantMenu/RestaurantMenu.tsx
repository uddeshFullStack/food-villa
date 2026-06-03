import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetRestaurantById } from "../../services/restaurants";
import { useGetRestaurantMenu } from "../../services/menu";
import { addItem } from "../../store/cartSlice";
import type { CartItem } from "../../store/cartSlice";
import { Shimmer } from "../Shimmer/Shimmer";
import { SHIMMER_VARIANT } from "../Shimmer/config";
import { useToast } from "../../utils/toastHelper";
import { MenuItem } from "./MenuItem";
import { RestaurantDetailCard } from "./RestaurantDetailCard";

export function RestaurantMenu() {
  const { id = "" } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const toast = useToast();

  const { data: restaurant, isLoading: restaurantLoading } =
    useGetRestaurantById(id);

  const { data: menu = [], isLoading: menuLoading } = useGetRestaurantMenu();

  const isLoading = restaurantLoading || menuLoading;

  const handleAddItem = (menuItem: CartItem) => {
    dispatch(addItem(menuItem));
    toast.success("Added to cart", menuItem.name);
  };

  useEffect(() => {
    if (!restaurantLoading && !restaurant) {
      toast.error("Restaurant not found", "Try another restaurant from home.");
    }
  }, [restaurantLoading, restaurant, toast]);

  if (isLoading) {
    return <Shimmer variant={SHIMMER_VARIANT.MENU_PAGE} />;
  }

  if (!restaurant) {
    return (
      <section className="page-shell">
        <div className="status-banner status-banner--error">
          <h2 className="m-0 text-xl font-bold">Restaurant not found</h2>
          <p className="mt-2 m-0">Try picking another restaurant from home.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="page-shell space-y-6">
      <header className="page-header">
        <h1 className="page-header__title">{restaurant.info.name}</h1>
        <p className="page-header__subtitle">
          {restaurant.info.cuisines.join(" · ")} · {restaurant.info.address}
        </p>
      </header>

      <div className="flex flex-col gap-8 lg:flex-row">
        <aside className="shrink-0">
          <RestaurantDetailCard info={restaurant.info} />
        </aside>

        <section className="flex-1">
          <div className="space-y-6">
            {menu.map((category) => (
              <div
                key={category.apiCategory}
                className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
              >
                <h2 className="mb-4 text-xl font-bold text-purple-800">
                  {category.label}
                </h2>
                <div className="menu-items-grid">
                  {category.items.map((item) => (
                    <MenuItem
                      key={item.id}
                      item={item}
                      onAdd={handleAddItem}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
