import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, removeItem } from "../../store/cartSlice";
import { ROUTES } from "../../constants/routes";
import { useToast } from "../../utils/toastHelper";
import { CartItem } from "./CartItem";
import { CartSummary } from "./CartSummary";

export function Cart() {
  const dispatch = useDispatch();
  const toast = useToast();
  const items = useSelector((store) => store.cart.items);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + Number(item.price || 0), 0),
    [items]
  );

  const handleClearCart = () => {
    if (!items.length) return;
    dispatch(clearCart());
    toast.info("Cart cleared", "All items were removed.");
  };

  const handleRemoveItem = (index, itemName) => {
    dispatch(removeItem(index));
    toast.success("Item removed", itemName);
  };

  return (
    <section className="page-shell cart-page">
      <header className="cart-page__header">
        <div>
          <h1 className="cart-page__title">Your cart</h1>
          <p className="cart-page__subtitle">
            {items.length === 0
              ? "No items added yet"
              : `${items.length} item${items.length === 1 ? "" : "s"} in cart`}
          </p>
        </div>
        {items.length > 0 ? (
          <button
            type="button"
            className="cart-page__clear"
            onClick={handleClearCart}
          >
            Clear cart
          </button>
        ) : null}
      </header>

      {items.length === 0 ? (
        <div className="cart-empty">
          <p className="cart-empty__text">Your cart is empty.</p>
          <Link to={ROUTES.HOME} className="search-btn inline-block">
            Browse restaurants
          </Link>
        </div>
      ) : (
        <div className="cart-page__layout">
          <div className="cart-page__items">
            {items.map((item, index) => (
              <CartItem
                key={`${item.name}-${index}`}
                item={item}
                onRemove={() => handleRemoveItem(index, item.name)}
              />
            ))}
          </div>
          <CartSummary itemCount={items.length} subtotal={subtotal} />
        </div>
      )}
    </section>
  );
}
