import React, { useState } from "react";
import {
  getMenuItemImageUrl,
  imageForRestaurant,
} from "../../utils/restaurantImages";

export function CartItem({ item, onRemove }) {
  const [imageSrc, setImageSrc] = useState(
    item.imageUrl ?? getMenuItemImageUrl(item.name, item.category)
  );

  return (
    <article className="cart-item-card">
      <img
        src={imageSrc}
        alt={item.name}
        className="cart-item-card__image"
        loading="lazy"
        onError={() => setImageSrc(imageForRestaurant(item.name))}
      />

      <div className="cart-item-card__body">
        {item.category ? (
          <p className="cart-item-card__category">{item.category}</p>
        ) : null}
        <h2 className="cart-item-card__title">{item.name}</h2>
        <p className="cart-item-card__description">{item.description}</p>
      </div>

      <div className="cart-item-card__actions">
        <p className="cart-item-card__price">${item.price}</p>
        <button type="button" className="cart-item-card__remove" onClick={onRemove}>
          Remove
        </button>
      </div>
    </article>
  );
}
