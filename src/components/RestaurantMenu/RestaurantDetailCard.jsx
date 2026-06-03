import React, { useContext } from "react";
import { MdOutlineStar } from "react-icons/md";
import UserContext from "../../provider/UserContext";
import { getRestaurantImageUrl } from "../../utils/restaurantImages";

export function RestaurantDetailCard({ info }) {
  const { user } = useContext(UserContext);

  return (
    <article className="restaurant-card">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={getRestaurantImageUrl(info)}
          alt={info.name}
          className="h-[173px] w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full rounded-b-xl bg-black/50 px-2 py-1 text-white">
          <p className="truncate text-sm font-bold">Items 60% off</p>
        </div>
      </div>

      <h2 className="mt-2 text-lg font-bold">{info.name}</h2>
      {info.address && (
        <p className="text-sm text-gray-600">{info.address}</p>
      )}

      <div className="mt-1 flex items-center gap-1">
        <span className="inline-flex rounded-full bg-green-600 p-1">
          <MdOutlineStar className="text-white" size={14} />
        </span>
        <p className="text-base font-bold">{info.avgRating} stars</p>
      </div>

      <p className="mt-2 text-xs text-gray-500">{user.name}</p>
      <p className="text-xs text-gray-500">{user.email}</p>
    </article>
  );
}
