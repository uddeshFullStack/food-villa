import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export function Error() {
  return (
    <section className="page-shell flex justify-center py-12">
      <div className="error-page">
        <p className="error-page__code">404</p>
        <h1 className="mt-2 text-2xl font-bold text-gray-900">
          Something went wrong
        </h1>
        <p className="mt-2 text-gray-600">
          The page could not be loaded or does not exist.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to={ROUTES.HOME} className="search-btn">
            Go home
          </Link>
          <Link to={ROUTES.CONTACTS} className="btn-secondary">
            Contact support
          </Link>
        </div>
      </div>
    </section>
  );
}
