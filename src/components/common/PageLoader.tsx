import React from "react";

interface PageLoaderProps {
  label?: string;
}

export function PageLoader({ label = "Loading..." }: PageLoaderProps) {
  return (
    <div className="page-shell">
      <div className="page-loader">
        <div className="page-loader__spinner" />
        <p className="page-loader__text">{label}</p>
      </div>
    </div>
  );
}
