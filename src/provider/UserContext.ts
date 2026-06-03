import { createContext } from "react";

export interface UserContextValue {
  user: { name: string; email: string };
  setUser: (user: { name: string; email: string }) => void;
}

const UserContext = createContext<UserContextValue>({
  user: { name: "uddesh", email: "uddesh@gmail.com" },
  setUser: () => {},
});

export default UserContext;
