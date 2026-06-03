import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "../store";
import UserContext from "./UserContext";

export function AppProvider({ children }) {
  const [user, setUser] = useState({
    name: "app.js",
    email: "app.js@gmail.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </Provider>
  );
}
