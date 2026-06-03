import React from "react";
import { SHIMMER_COUNT, SHIMMER_VARIANT } from "./config";
import { MenuPageShimmer } from "./MenuPageShimmer";
import { RestaurantCardShimmer } from "./RestaurantCardShimmer";

export function Shimmer({ variant = SHIMMER_VARIANT.RESTAURANT_LIST }) {
  if (variant === SHIMMER_VARIANT.MENU_PAGE) {
    return <MenuPageShimmer />;
  }

  return (
    <div className="mx-auto max-w-7xl p-4">
      <div className="mb-6 flex flex-wrap justify-center gap-3">
        <div className="shimmer-block h-10 w-64 rounded-md" />
        <div className="shimmer-block h-10 w-24 rounded-md" />
      </div>
      <div className="flex flex-wrap justify-center gap-2 rounded-md bg-white p-4">
        {Array(SHIMMER_COUNT.RESTAURANT_LIST)
          .fill("")
          .map((_, index) => (
            <RestaurantCardShimmer key={index} />
          ))}
      </div>
    </div>
  );
}
