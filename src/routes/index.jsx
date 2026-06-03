import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { AppLayout } from "../components/Layout/AppLayout/AppLayout";
import { Error } from "../components/Error/Error";
import { Shimmer } from "../components/Shimmer/Shimmer";
import { Home } from "../pages/Home";
import { RestaurantMenuPage } from "../pages/RestaurantMenuPage";
import { ContactPage } from "../pages/ContactPage";
import { CartPage } from "../pages/CartPage";
import { ProfilePage } from "../pages/ProfilePage";

const AboutPage = lazy(() =>
  import("../pages/AboutPage").then((m) => ({ default: m.AboutPage }))
);
const InstamartPage = lazy(() =>
  import("../pages/InstamartPage").then((m) => ({ default: m.InstamartPage }))
);

export const appRouter = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: ROUTES.ABOUT,
        element: (
          <Suspense fallback={<h1 className="page-title">Loading...</h1>}>
            <AboutPage />
          </Suspense>
        ),
        children: [{ path: "profile", element: <ProfilePage /> }],
      },
      { path: ROUTES.CONTACTS, element: <ContactPage /> },
      { path: ROUTES.RESTAURANT, element: <RestaurantMenuPage /> },
      {
        path: ROUTES.INSTAMART,
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstamartPage />
          </Suspense>
        ),
      },
      { path: ROUTES.CART, element: <CartPage /> },
    ],
  },
]);
