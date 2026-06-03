import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Provider } from "react-redux";
import store from "../store";
import UserContext, { type AuthUser } from "./UserContext";
import { QueryProvider } from "./QueryProvider/QueryProvider";
import { ToastProvider } from "./ToastProvider/ToastProvider";
import { auth } from "../services/auth/firebase";

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    if (!auth) return;

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          name: firebaseUser.displayName ?? firebaseUser.email ?? "User",
          email: firebaseUser.email ?? "",
        });
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

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
