import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useOnline } from "../../../hooks/useOnline";
import UserContext from "../../../provider/UserContext";
import { ROUTES } from "../../../constants/routes";
import { Title } from "./Title";

const navLinks = [
  { label: "Home", to: ROUTES.HOME },
  { label: "About", to: ROUTES.ABOUT },
  { label: "Contacts", to: ROUTES.CONTACTS },
  { label: "Instamart", to: ROUTES.INSTAMART },
];

export function Header() {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const isOnline = useOnline();
  const cartItems = useSelector((store) => store.cart.items);
  const { user } = useContext(UserContext);

  return (
    <header className="sticky top-0 z-10 border-b border-pink-100 bg-pink-50 shadow-md sm:bg-blue-50 md:bg-yellow-50">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Title />

        <nav className="nav-items" aria-label="Main navigation">
          <ul>
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
            <li>
              <Link to={ROUTES.CART}>Cart ({cartItems.length})</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3 text-sm">
          <span title={isOnline ? "Online" : "Offline"}>
            {isOnline ? "✅" : "❌"}
          </span>
          <span className="font-medium text-red-700">{user.name}</span>
          <button
            type="button"
            className="search-btn"
            onClick={() => setLoggedInUser((prev) => !prev)}
          >
            {loggedInUser ? "Login" : "Logout"}
          </button>
        </div>
      </div>
    </header>
  );
}
