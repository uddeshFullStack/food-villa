import React from "react";
import { SHIMMER_COUNT } from "./config";
import { RestaurantCardShimmer } from "./RestaurantCardShimmer";
import { ShimmerBlock } from "./ShimmerBlock";

export function MenuPageShimmer() {
  return (
    <div className="page-shell">
      <div className="flex flex-col gap-8 lg:flex-row">
        <aside className="shrink-0">
          <RestaurantCardShimmer />
        </aside>
        <section className="flex-1 space-y-6">
          <ShimmerBlock className="h-9 w-40 rounded" />
          {Array(SHIMMER_COUNT.MENU_ITEM)
            .fill("")
            .map((_, index) => (
              <div key={index} className="rounded-lg border border-gray-200 bg-white p-4">
                <ShimmerBlock className="mb-4 h-6 w-32 rounded" />
                <div className="menu-items-grid">
                  {Array(3)
                    .fill("")
                    .map((__, itemIndex) => (
                      <div key={itemIndex} className="menu-item-card pointer-events-none">
                        <ShimmerBlock className="h-[150px] w-full shrink-0" />
                        <div className="menu-item-card__body">
                          <ShimmerBlock className="h-5 w-[85%] rounded" />
                          <div className="menu-item-card__footer">
                            <ShimmerBlock className="h-6 w-16 rounded" />
                            <ShimmerBlock className="h-9 w-full rounded-md" />
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </section>
      </div>
    </div>
  );
}
