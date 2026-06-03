import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../../../provider/UserContext";
import { ROUTES } from "../../../constants/routes";

const footerLinks = [
  { label: "Home", to: ROUTES.HOME, end: true },
  { label: "About", to: ROUTES.ABOUT },
  { label: "Contact", to: ROUTES.CONTACTS },
  { label: "Instamart", to: ROUTES.INSTAMART },
  { label: "Cart", to: ROUTES.CART },
] as const;

function footerLinkClass({ isActive }: { isActive: boolean }) {
  return isActive
    ? "site-footer__link site-footer__link--active"
    : "site-footer__link";
}

export function Footer() {
  const { user } = useContext(UserContext);
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <p className="site-footer__brand-name">Food Villa</p>
            <p className="site-footer__brand-text">
              Browse restaurants, explore menus, and build your cart — a React
              learning project with modern UI patterns.
            </p>
          </div>

          <div>
            <p className="site-footer__heading">Quick links</p>
            <ul className="site-footer__links">
              {footerLinks.map(({ label, to, end }) => (
                <li key={to}>
                  <NavLink to={to} end={end} className={footerLinkClass}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="site-footer__heading">Contact</p>
            <ul className="site-footer__contact">
              <li>
                <a href="tel:7059219618" className="site-footer__link">
                  7059219618
                </a>
              </li>
              <li>
                <a href="mailto:support@foodvilla.demo" className="site-footer__link">
                  support@foodvilla.demo
                </a>
              </li>
              <li className="site-footer__contact-muted">Kolkata, India</li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            © {year} Food Villa. All rights reserved.
          </p>
          <p className="site-footer__credit">
            Developed by{" "}
            <span className="font-semibold text-purple-800">{user.name}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
