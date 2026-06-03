import React, { useContext } from "react";
import UserContext from "../../../provider/UserContext";

export function Footer() {
  const { user } = useContext(UserContext);

  return <p className="m-0">This site is developed by {user.name}</p>;
}
