import React, { useState } from "react";
import { getMenuItemImageUrl, imageForRestaurant } from "../../utils/restaurantImages";

export function MenuItem({ item, category, onAdd }) {
  const [imageSrc, setImageSrc] = useState(
    item.imageUrl ?? getMenuItemImageUrl(item.name, category)
  );

  return (
    <article className="menu-item-card">
      <img
        src={imageSrc}
        className="menu-item-card__image"
        alt={item.name}
        loading="lazy"
        onError={() => setImageSrc(imageForRestaurant(item.name))}
      />

      <div className="menu-item-card__body">
        <h2 className="menu-item-card__title">{item.name}</h2>
        <p className="menu-item-card__description">{item.description}</p>

        <div className="menu-item-card__footer">
          <p className="menu-item-card__price">${item.price}</p>
          <button
            type="button"
            className="search-btn w-full"
            onClick={() => onAdd({ ...item, category, imageUrl: imageSrc })}
          >
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
