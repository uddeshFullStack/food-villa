import React from "react";

export const Shimmer=()=>{
    return(
      <div className="flex flex-wrap">
        {Array(20).fill("").map((e) =>(
          <>
            <div key={1} className="w-[200px] h-[250px] bg-[#c2bdbd] m-[10px]"></div>
          </>
        ))}
      </div>
    );
  }
  