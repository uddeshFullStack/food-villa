import React from "react";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

const About=() =>{
    console.log("render");
    return(
      <>
        <p><Profile name={"easy"} /></p>
        <div>
          about us page loaded
        </div>
        <p><ProfileClass name={"class"} /></p>
      </>
    )
}

export default About;