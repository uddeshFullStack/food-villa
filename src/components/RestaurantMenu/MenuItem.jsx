import React from "react";

export function MenuItem({ item, onAdd }) {
  return (
    <div className="m-2 w-[180px] rounded-lg border border-gray-200 bg-white p-2 shadow-sm">
      <img
        src="https://www.anifabiriyani.com/meta/biriyani-spl.webp"
        className="h-[150px] w-full rounded-md object-cover"
        alt={item.name}
      />
      <h2 className="mt-2 text-lg font-bold">{item.name}</h2>
      <p className="text-sm text-gray-600">{item.description}</p>
      <p className="mt-1 text-lg font-bold text-green-700">${item.price}</p>
      <button
        type="button"
        className="search-btn mt-2 w-full"
        onClick={() => onAdd(item)}
      >
        Add
      </button>
    </div>
  );
}
