import React from "react";

export function PageLoader({ label = "Loading..." }) {
  return (
    <div className="page-shell">
      <div className="page-loader">
        <div className="page-loader__spinner" />
        <p className="page-loader__text">{label}</p>
      </div>
    </div>
  );
}
