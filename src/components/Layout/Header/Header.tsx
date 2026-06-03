import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useOnline } from "../../../hooks/useOnline";
import { ROUTES } from "../../../constants/routes";
import type { RootState } from "../../../store";
import { Title } from "./Title";

const navLinks = [
  { label: "Home", to: ROUTES.HOME, end: true },
  { label: "About", to: ROUTES.ABOUT },
  { label: "Contacts", to: ROUTES.CONTACTS },
  { label: "Instamart", to: ROUTES.INSTAMART },
] as const;

function navLinkClass({ isActive }: { isActive: boolean }) {
  return isActive
    ? "site-header__link site-header__link--active"
    : "site-header__link";
}

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const cartCount = useSelector(
    (store: RootState) => store.cart.items.length
  );
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Title />

        <nav className="site-header__nav" aria-label="Main navigation">
          <ul className="site-header__nav-list">
            {navLinks.map(({ label, to, end }) => (
              <li key={to}>
                <NavLink to={to} end={end} className={navLinkClass}>
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to={ROUTES.CART} className={navLinkClass}>
                Cart
                {cartCount > 0 ? (
                  <span className="site-header__cart-badge">{cartCount}</span>
                ) : null}
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="site-header__actions">
          <div
            className={`site-header__status ${
              isOnline
                ? "site-header__status--online"
                : "site-header__status--offline"
            }`}
            title={isOnline ? "Online" : "Offline"}
          >
            <span className="site-header__status-dot" />
            {isOnline ? "Online" : "Offline"}
          </div>

          <button
            type="button"
            className={isLoggedIn ? "btn-secondary" : "search-btn"}
            onClick={() => setIsLoggedIn((prev) => !prev)}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </header>
  );
}
