import React, { useContext } from "react";
import { MdOutlineStar } from "react-icons/md";
import UserContext from "../../provider/UserContext";
import { getRestaurantImageUrl } from "../../utils/restaurantImages";

export function RestaurantCard({ name, cuisines, avgRating, imageUrl, id }) {
  const { user } = useContext(UserContext);

  return (
    <article className="restaurant-card">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={getRestaurantImageUrl({ imageUrl, id })}
          alt={name}
          className="h-[173px] w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full rounded-b-xl bg-black/50 px-2 py-1 text-white">
          <p className="truncate text-sm font-bold">Items 60% off</p>
        </div>
      </div>

      <h2 className="mt-2 truncate text-lg font-bold">{name}</h2>
      <p className="truncate text-sm text-gray-600">{cuisines.join(", ")}</p>

      <div className="mt-1 flex items-center gap-1">
        <span className="inline-flex rounded-full bg-green-600 p-1">
          <MdOutlineStar className="text-white" size={14} />
        </span>
        <p className="text-base font-bold">{avgRating} stars</p>
      </div>

      <p className="mt-1 truncate text-xs text-gray-500">{user.name}</p>
      <p className="truncate text-xs text-gray-500">{user.email}</p>
    </article>
  );
}
