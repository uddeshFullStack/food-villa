import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export function CartSummary({ itemCount, subtotal }) {
  return (
    <aside className="cart-summary">
      <h2 className="cart-summary__title">Order summary</h2>
      <div className="cart-summary__row">
        <span>Items</span>
        <span>{itemCount}</span>
      </div>
      <div className="cart-summary__row cart-summary__row--total">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <button type="button" className="search-btn w-full" disabled>
        Checkout (demo)
      </button>
      <Link to={ROUTES.HOME} className="cart-summary__link">
        Continue shopping
      </Link>
    </aside>
  );
}
