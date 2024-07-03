import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/online";

export const Title = () => (
    <a href="/">
    <img
    className="h-28 p-2"
      alt="logo"
      src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
    />
    </a>
  );
  
  
export const Header= function () {
    const [loggedInUser,setLoggedInUser]=useState(false)
    const isOnline=useOnline()
    return (
      <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
        <Title />
         
        <div className="nav-items">
          <ul className="flex py-10">
            <Link to="/">
              <li className="px-2">Home</li>
            </Link>
            <Link to="/about">
              <li className="px-2">About</li>
            </Link>
            <Link to="/contacts">
              <li className="px-2">Contacts</li>
            </Link>
            <Link to="/instamart">
              <li className="px-2">Instamart</li>
            </Link>
            <Link to="/dummy">
              <li className="px-2">Insta</li>
            </Link>
            <li className="px-2">Cart</li>
          </ul>
        </div>
        <h3>{isOnline?"✅":"❌"}</h3>
        {
          loggedInUser?
          <button onClick={()=>setLoggedInUser(false)}>login</button>
          :<button onClick={()=>setLoggedInUser(true)}>logout</button>
        }
        
      </div>
    );
  };
  