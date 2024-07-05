import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Shimmer } from './Shimmer';
import { restaurantMenuList } from '../../contant';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

export const RestaurantMenu = () => {
  const resId  = useParams();
  const [data, setData] = useState(null);

  const dispatch=useDispatch()
  

  const addFoodItems=(item)=>{
    dispatch(addItem(item))
  }

  useEffect(() => {
    console.log('resId:', resId);
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667");
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
    <div className='flex'>
      <div>
        {restaurants
          .filter(restaurant => restaurant.info.id === resId.id)
          .map(restaurant => (
            <div className="w-[200px] p-2 m-2 shadow-md bg-pink-50">
              <h1 className='font-mono font-bold text-3xl'>{restaurant.info.name}</h1>
              <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/"+restaurant.info.cloudinaryImageId}></img>
              <h3>{restaurant.info.cuisines.join(", ")}</h3>
              <h4 className="font-bold text-xl">{restaurant.info.avgRating} stars</h4>
            </div>
          ))
        }
      </div>
      <div>
      <div className='font-mono font-bold text-3xl text-center  bg-pink-50'>Menus</div>
      <div className='flex flex-wrap justify-center'>
        {restaurantMenuList.menus.map(menu => (
          <div key={menu.category} className="p-2 m-2 shadow-md bg-pink-50">
            <h2 className="font-bold text-xl">{menu.category}</h2>
            {menu.items.map(item => (
              <div key={item.name} className="w-[180px] p-2 m-2 shadow-md bg-pink-50">
                {/* <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/"+restaurant.info.cloudinaryImageId}></img> */}
                <h2 className="font-bold text-xl">{item.name}</h2>
                <h3>{item.description}</h3>
                <h4 className="font-bold text-xl">{item.price} $</h4>
                <button className='p-2 m-2 bg-green-50' 
                  onClick={()=>{addFoodItems(item)}}
                >
                Add</button>
                </div>
            ))}
          </div>
        ))}
      </div>
      </div>
    </div>
    
  );
};

export default RestaurantMenu;
