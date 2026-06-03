import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

export function Title() {
  return (
    <Link to={ROUTES.HOME} className="inline-flex shrink-0 items-center">
      <img
        className="h-20 w-auto p-1 sm:h-24"
        alt="Food Villa logo"
        src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
      />
    </Link>
  );
}
