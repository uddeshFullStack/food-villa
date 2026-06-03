import React from "react";

export function ShimmerBlock({ className = "" }) {
  return <div className={`shimmer-block ${className}`.trim()} />;
}
