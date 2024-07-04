import React, { useContext } from "react";
import UserContext from "../utils/UserContext";
export const Footer=()=>{
  const {user}=useContext(UserContext)
    return (
      <>
        <h3>this site is developed by {user.name}</h3>
      </>
    );
}
  