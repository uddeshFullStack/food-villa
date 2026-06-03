import React from "react";
import { Link } from "react-router-dom";
import { Profile } from "../components/About/Profile";
import { ROUTES } from "../constants/routes";

export function ProfilePage() {
  return (
    <div className="content-card">
      <p className="info-card__label">Nested route</p>
      <Profile name="profile route" />
      <Link
        to={ROUTES.ABOUT}
        className="mt-4 inline-block text-sm font-semibold text-purple-700 hover:text-purple-900"
      >
        ← Back to About
      </Link>
    </div>
  );
}
