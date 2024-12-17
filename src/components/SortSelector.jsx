import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

export const SortSelector = ({ selectOrdering }) => {
  const [selected, setSelected] = useState("Relevance");
  const [isOpen, setIsOpen] = useState(false);

  const ordering = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-added", label: "Date added" },
    { value: "-released", label: "Release date" },
    { value: "metacritic", label: "Popularity" },
    { value: "rating", label: "Average rating" },
  ];

  return (
    <>
      <div className="relative w-64">
        <button
          id="custom-dropdown"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600"
        >
          <span>Sort By : {selected}</span>
          {/* Down Arrow */}
          <BiChevronDown
            className={` transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && (
          <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-600">
            {ordering.map((order, index) => (
              <li
                key={index}
                onClick={() => {
                  selectOrdering(order.value);
                  setSelected(order.label);
                  setIsOpen(false);
                }}
                className={`cursor-pointer px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white dark:text-gray-200 dark:hover:bg-gray-600 `}
              >
                {order.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
