import React from "react";

export function Section({ title, description, isVisible, onToggle }) {
  return (
    <div className="rounded-lg border border-gray-300 bg-white p-4 shadow-sm">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      {isVisible ? (
        <>
          <button
            type="button"
            onClick={onToggle}
            className="mt-2 text-sm font-medium text-purple-700 underline"
          >
            Hide
          </button>
          <p className="mt-2 text-gray-700">{description}</p>
        </>
      ) : (
        <button
          type="button"
          onClick={onToggle}
          className="mt-2 text-sm font-medium text-purple-700 underline"
        >
          Show
        </button>
      )}
    </div>
  );
}
