import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "../store";
import UserContext from "./UserContext";
import { QueryProvider } from "./QueryProvider/QueryProvider";
import { ToastProvider } from "./ToastProvider/ToastProvider";

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState({
    name: "app.js",
    email: "app.js@gmail.com",
  });

  return (
    <Provider store={store}>
      <QueryProvider>
        <ToastProvider>
          <UserContext.Provider value={{ user, setUser }}>
            {children}
          </UserContext.Provider>
        </ToastProvider>
      </QueryProvider>
    </Provider>
  );
}
