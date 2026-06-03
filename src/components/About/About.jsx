import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { Profile } from "./Profile";
import { ProfileClass } from "./ProfileClass";

export function About() {
  return (
    <section className="page-shell space-y-6">
      <header className="page-header">
        <h1 className="page-header__title">About Food Villa</h1>
        <p className="page-header__subtitle">
          A demo food-ordering app built with React, Redux, and React Query.
        </p>
      </header>

      <div className="content-card">
        <p className="m-0 leading-relaxed text-gray-700">
          Food Villa helps you browse restaurants, explore menus, add items to
          your cart, and practice modern frontend patterns like routing, API
          caching, and component-driven UI.
        </p>
        <Link
          to={`${ROUTES.ABOUT}/profile`}
          className="mt-4 inline-block text-sm font-semibold text-purple-700 hover:text-purple-900"
        >
          View nested profile route →
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="info-card">
          <p className="info-card__label">Demo 1</p>
          <Profile name="easy" />
        </div>
        <div className="info-card">
          <p className="info-card__label">Demo 2</p>
          <ProfileClass name="class" />
        </div>
      </div>

      <Outlet />
    </section>
  );
}
