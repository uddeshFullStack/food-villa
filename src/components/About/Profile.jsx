import React from "react";

export function Profile({ name }) {
  return (
    <div className="profile-demo-card">
      <span className="profile-demo-card__badge">Functional component</span>
      <h2 className="info-card__title">Hello, {name}</h2>
      <p className="m-0 text-sm text-gray-600">
        This profile is rendered with a React function component.
      </p>
    </div>
  );
}
