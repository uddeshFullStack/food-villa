import React, { useState } from "react";
import { getMenuItemFallbackUrl } from "../../utils/restaurantImages";
import type { CartItem as CartItemType } from "../../store/cartSlice";

interface CartItemProps {
  item: CartItemType;
  onRemove: () => void;
}

export function CartItem({ item, onRemove }: CartItemProps) {
  const [imageSrc, setImageSrc] = useState(
    item.imageUrl ?? getMenuItemFallbackUrl()
  );

  return (
    <article className="cart-item-card">
      <img
        src={imageSrc}
        alt={item.name}
        className="cart-item-card__image"
        loading="lazy"
        onError={() => setImageSrc(getMenuItemFallbackUrl())}
      />
      <div className="cart-item-card__body">
        {item.category ? (
          <p className="cart-item-card__category">{item.category}</p>
        ) : null}
        <h2 className="cart-item-card__title">{item.name}</h2>
        {item.description ? (
          <p className="cart-item-card__description">{item.description}</p>
        ) : null}
      </div>
      <div className="cart-item-card__actions">
        <p className="cart-item-card__price">${item.price}</p>
        <button
          type="button"
          className="cart-item-card__remove"
          onClick={onRemove}
        >
          Remove
        </button>
      </div>
    </article>
  );
}
