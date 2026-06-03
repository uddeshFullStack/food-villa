import { createContext } from "react";

const UserContext = createContext({
  user: { name: "uddesh", email: "uddesh@gmail.com" },
  setUser: () => {},
});

export default UserContext;
