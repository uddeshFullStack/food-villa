import { createContext } from "react";

export interface AuthUser {
  name: string;
  email: string;
}

export interface UserContextValue {
  user: AuthUser | null;
  setUser: (user: AuthUser | null) => void;
}

const UserContext = createContext<UserContextValue>({
  user: null,
  setUser: () => {},
});

export default UserContext;
