import React from "react";

export const Shimmer=()=>{
    return(
      <div className="restaurant-list">
        {Array(15).fill("").map((e) =>(
          <>
            <div key={1} className="shimmer-restaurant"></div>
          </>
        ))}
      </div>
    );
  }
  