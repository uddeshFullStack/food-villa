import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useOnline } from "../../../hooks/useOnline";
import { ROUTES } from "../../../constants/routes";
import type { RootState } from "../../../store";
import UserContext from "../../../provider/UserContext";
import { signOut } from "../../../services/auth/api";
import { useToast } from "../../../utils/toastHelper";
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
  const { user, setUser } = useContext(UserContext);
  const isOnline = useOnline();
  const navigate = useNavigate();
  const toast = useToast();
  const cartCount = useSelector(
    (store: RootState) => store.cart.items.length
  );

  async function handleLogout() {
    try {
      await signOut();
    } catch {
      // If Firebase isn't configured, manually clear user
    } finally {
      setUser(null);
      toast.info("You've been signed out.");
      navigate(ROUTES.HOME);
    }
  }

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

          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="hidden text-sm font-medium text-gray-700 sm:block">
                  {user.name}
                </span>
              </div>
              <button
                type="button"
                className="btn-secondary"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="search-btn"
              onClick={() => navigate(ROUTES.LOGIN)}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
