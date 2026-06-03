import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../../store/cartSlice";

export function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.items);

  return (
    <section className="mx-auto max-w-5xl">
      <h1 className="page-title mb-4">Cart Items</h1>

      <button
        type="button"
        className="search-btn mb-4"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>

      {items.length === 0 ? (
        <p className="rounded-lg bg-pink-50 p-6 text-center text-gray-600">
          Your cart is empty.
        </p>
      ) : (
        <div className="flex flex-wrap gap-3 rounded-lg bg-pink-50 p-4">
          {items.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="w-[180px] rounded-lg border border-pink-200 bg-white p-3 shadow-sm"
            >
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="mt-1 font-bold text-green-700">${item.price}</p>
              <button
                type="button"
                className="search-btn mt-2"
                onClick={() => dispatch(removeItem())}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
