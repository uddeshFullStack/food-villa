import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export function Error() {
  return (
    <section className="mx-auto max-w-lg rounded-lg bg-red-50 p-8 text-center">
      <h1 className="text-3xl font-bold text-red-700">Oops! Error</h1>
      <p className="mt-2 text-gray-700">Something went wrong.</p>
      <Link to={ROUTES.HOME} className="search-btn mt-6 inline-block">
        Go Home
      </Link>
    </section>
  );
}
