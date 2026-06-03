import { useContext } from "react";
import UserContext from "../../provider/UserContext";
import { signIn, signOut, signUp } from "./api";

export { signIn, signOut, signUp };

export function useAuth() {
  const { user, setUser } = useContext(UserContext);
  const isLoggedIn = user !== null;

  return { user, isLoggedIn, setUser };
}
