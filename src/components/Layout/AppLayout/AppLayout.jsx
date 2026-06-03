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
        <footer className="border-t border-gray-200 bg-pink-50 px-6 py-4 text-center text-sm text-gray-700">
          <Footer />
        </footer>
      </div>
    </AppProvider>
  );
}
