import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

export function Title() {
  return (
    <Link to={ROUTES.HOME} className="site-header__brand">
      <div className="site-header__logo-mark" aria-hidden="true">
        Z
      </div>
      <span className="site-header__brand-text">
        <span className="site-header__brand-name">Zestora</span>
        <span className="site-header__brand-tagline">Taste the city</span>
      </span>
    </Link>
  );
}
