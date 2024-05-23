import React, { useEffect, useState } from "react";
import { data1 } from "./Body";

export const RestaurantMenu = () => {
  const [restaurantName, setRestaurantName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await data1();
        const data = await response.json();
        // Process the fetched data here
        const val = data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[1]?.name;
        setRestaurantName(val);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return ( 
    <div>
      <h1>{restaurantName}</h1>
    </div>
  );
};



// import React from "react";

// import { useEffect, useParams } from "react";

// // import { data1 } from "./Body";

// // export const RestaurantMenu =()=>{
// //   const data2=data1
// //   const data=data2.json()
// //   const val=json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.name;
// //     return(
// //       <div>
// //         <h1>{data1.json()}</h1>
// //       </div>
// //     )
// //   }

// import { data1 } from "./Body";

// export const RestaurantMenu = () => {
//   // Assuming data1 is an async function that fetches API data
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await data1();
//         const data = await response.json();
//         // Now you can access and process the fetched data here
//         console.log(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, []);
//   const val=json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.name;
//   return( 
//   <div>
//     <h1>{val}</h1>
//   </div>)
// };


  