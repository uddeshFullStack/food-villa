import React from "react";
import { Outlet } from "react-router-dom";
import { AppProvider } from "../../../provider/AppProvider";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export function AppLayout() {
  return (
    <AppProvider>
      <div className="app-shell">
        <Header />
        <main className="app-main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}
