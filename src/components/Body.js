import React, { useContext } from "react";
import { Shimmer } from "./Shimmer";

import { useState, useEffect } from "react";

import useOnline from "../utils/online";
import UserContext from "../utils/UserContext";
import { Link } from "react-router-dom";

const RestaurantCard=({name,cuisines,cloudinaryImageId,avgRating})=>{
    const {user, setUser}=useContext(UserContext)
    return(
      <div className="w-[200px] p-2 m-2 shadow-md bg-pink-50">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/"+cloudinaryImageId}></img>
        <h2 className="font-bold text-2xl">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4 className="font-bold text-xl">{avgRating} stars</h4>
        <h4>{user.name}</h4>
        <h4>{user.email}</h4>
      </div>
    );
  };
  
  
  function filterData(searchText,restaurants){
      const data= restaurants.filter((restaurant) => 
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      return data;
  }
  
export function data1(){
  return(
    fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667")
  )
}  
  
  
export const Body=()=>{

    const {user,setUser}=useContext(UserContext)
    const [searchText,setSearchText]=useState("");
    const [allrestaurants,setALLRestaurants]=useState("");
    const [filteredRestaurants,setFilteredRestaurants]=useState("")
    
    useEffect(() => {
      getRestaurants();
      console.log("second");
    },[]);
    console.log("first");
    async function getRestaurants(){
     const data=await data1()
     const json=await data.json();
     setALLRestaurants(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
     setFilteredRestaurants(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    if(!useOnline()){
      return (
        <h1>"sorry you are offline"</h1>
      )
    }
    return allrestaurants.length===0?(<> <Shimmer /> </> ):(
      <>
      <div className="search-container p-5 bg-pink-50 my-2">
        <input type="text" 
        className="border-solid border-2 pl-2" 
        placeholder="search" 
        value={searchText} 
        onChange={(e) =>{
         setSearchText(e.target.value)
         //setRestaurants(restaurantList)
        }}/>
        <button 
        className="search-btn px-2 m-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        onClick={() =>{
         //filter the data
         const data = filterData(searchText,allrestaurants);
         //update restaurant variable
         setFilteredRestaurants(data)
        }}>
        Search</button>
      </div>
      
      <div className="flex flex-wrap">
        {
          filteredRestaurants.map(restaurant => {
            return( 
            <Link to={"/restaurant/"+restaurant.info.id}>
              <RestaurantCard key={restaurant.info.id} {...restaurant.info} user={user}/>
            </Link>
            )
          })
        }
      </div>
      </>
            
    );
  }
  