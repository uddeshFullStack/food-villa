import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Shimmer } from './Shimmer';

export const RestaurantMenu = () => {
  const resId  = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('resId:', resId);
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667");
      // const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=55473");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  if(!data){
    return <Shimmer/>
  }
  const restaurants = data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

  return (
    <div>
      <h1>Restaurant Menu</h1>
      {restaurants
        .filter(restaurant => restaurant.info.id === resId.id)
        .map(restaurant => (
          <div className="w-[200px] p-2 m-2 shadow-md bg-pink-50">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/"+restaurant.info.cloudinaryImageId}></img>
            <h2 className="font-bold text-2xl">{restaurant.info.name}</h2>
            <h3>{restaurant.info.cuisines.join(", ")}</h3>
            <h4 className="font-bold text-xl">{restaurant.info.avgRating} stars</h4>
          </div>
        ))
      }
    </div>
  );
};

export default RestaurantMenu;
