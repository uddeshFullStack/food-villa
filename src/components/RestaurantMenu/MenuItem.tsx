import React from "react";
import type { CartItem } from "../../store/cartSlice";
import type { MenuItem as MenuItemType } from "../../services/menu/types";

interface MenuItemProps {
  item: MenuItemType;
  onAdd: (item: CartItem) => void;
}

export function MenuItem({ item, onAdd }: MenuItemProps) {
  return (
    <article className="menu-item-card">
      <img
        src={item.imageUrl}
        className="menu-item-card__image"
        alt={item.name}
        loading="lazy"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            "https://cdn.dummyjson.com/recipe-images/1.webp";
        }}
      />
      <div className="menu-item-card__body">
        <h2 className="menu-item-card__title">{item.name}</h2>
        <div className="menu-item-card__footer">
          <p className="menu-item-card__price">${item.price}</p>
          <button
            type="button"
            className="search-btn w-full"
            onClick={() =>
              onAdd({
                name: item.name,
                price: item.price,
                category: item.category,
                imageUrl: item.imageUrl,
              })
            }
          >
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
