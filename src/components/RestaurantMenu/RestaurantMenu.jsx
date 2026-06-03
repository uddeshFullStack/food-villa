import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { restaurantMenuList } from "../../mock-data/menuList";
import { useRestaurantById } from "../../services/restaurants";
import { addItem } from "../../store/cartSlice";
import { Shimmer } from "../Shimmer/Shimmer";
import { MenuItem } from "./MenuItem";
import { RestaurantDetailCard } from "./RestaurantDetailCard";

export function RestaurantMenu() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { restaurant, isLoading } = useRestaurantById(id);

  if (isLoading || !restaurant) {
    return <Shimmer />;
  }

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row">
      <aside className="shrink-0">
        <RestaurantDetailCard info={restaurant.info} />
      </aside>

      <section className="flex-1">
        <h1 className="page-title mb-6 text-left">Menu</h1>
        <div className="space-y-6">
          {restaurantMenuList.menus.map((menu) => (
            <div
              key={menu.category}
              className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
            >
              <h2 className="mb-3 text-xl font-bold text-purple-800">
                {menu.category}
              </h2>
              <div className="flex flex-wrap">
                {menu.items.map((item) => (
                  <MenuItem
                    key={item.name}
                    item={item}
                    onAdd={(menuItem) => dispatch(addItem(menuItem))}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
