import React from "react";

export function ShimmerBlock({ className = "" }: { className?: string }) {
  return <div className={`shimmer-block ${className}`.trim()} />;
}
