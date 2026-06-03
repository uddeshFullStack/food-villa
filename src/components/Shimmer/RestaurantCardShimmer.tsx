import React from "react";
import { ShimmerBlock } from "./ShimmerBlock";

export function RestaurantCardShimmer() {
  return (
    <div className="restaurant-card pointer-events-none">
      <ShimmerBlock className="h-[173px] w-full rounded-xl" />
      <ShimmerBlock className="mt-3 h-5 w-[85%] rounded" />
      <ShimmerBlock className="mt-2 h-4 w-[65%] rounded" />
      <ShimmerBlock className="mt-2 h-4 w-[45%] rounded" />
      <ShimmerBlock className="mt-2 h-3 w-[50%] rounded" />
    </div>
  );
}
