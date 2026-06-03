import React from "react";

export function Shimmer() {
  return (
    <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 p-4">
      {Array(20)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="h-[250px] w-[200px] animate-pulse rounded-xl bg-gray-300"
          />
        ))}
    </div>
  );
}
