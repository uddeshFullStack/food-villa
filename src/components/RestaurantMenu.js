import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Shimmer } from './Shimmer';
import { restaurantMenuList } from '../../contant';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';
import { MdOutlineStar } from "react-icons/md";
import UserContext from "../utils/UserContext";

export const RestaurantMenu = () => {
  const { user } = useContext(UserContext);
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
    <div className='flex m-5'>
      <div>
        {restaurants
          .filter(restaurant => restaurant.info.id === resId.id)
          .map(restaurant => (
            <div className="w-[200px] p-2 m-2 bg-white">
              <div className="relative">
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" +
                    restaurant.info.cloudinaryImageId
                  }
                  alt={name}
                  className="w-full rounded-xl h-[173px]"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white font-bold px-2  rounded-b-xl">
                  <h2 className="text-[18px] truncate">items 60 % off</h2>
                </div>
              </div>
            
            <h2 className="font-bold text-[18px] truncate">{restaurant.info.name}</h2>
            <div className="flex items-center space-x-1">
              <div className="bg-green-600 p-1 rounded-full inline-block">
                <MdOutlineStar className="text-white"/>
              </div>
              <p className="font-bold text-xl">{restaurant.info.avgRating.toString()} stars</p>
            </div>  
            <h4 className="truncate">{user.name}</h4>
            <h4 className="truncate">{user.email}</h4>
          </div>
      
          ))
        }
      </div>
      <div className='flex flex-col justify-start items-center mx-10 my-5'>
      <div className='font-mono font-bold text-3xl text-center mb-5'>Menus</div>
      <div className='flex flex-col justify-center'>
        {restaurantMenuList.menus.map(menu => (
        <div className='flex flex-row'>
          <div key={menu.category}>
            <h2 className="font-bold w-[100px] text-xl">{menu.category}</h2>
          </div>
          <div key={menu.category} className="p-2 m-2 flex flex-wrap ">
            
            {menu.items.map(item => (
              <div key={item.name} className="w-[180px]  p-2 m-2 ">
                <img src={"https://www.anifabiriyani.com/meta/biriyani-spl.webp"} 
                className='w-full h-[150px] rounded-md '
                ></img>
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
        </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
