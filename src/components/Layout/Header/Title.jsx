import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

export function Title() {
  return (
    <Link to={ROUTES.HOME} className="site-header__brand">
      <img
        className="site-header__logo"
        alt="Food Villa"
        src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
      />
      <span className="site-header__brand-text">
        <span className="site-header__brand-name">Food Villa</span>
        <span className="site-header__brand-tagline">Order with joy</span>
      </span>
    </Link>
  );
}
