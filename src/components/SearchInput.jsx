import { Input } from "postcss";
import React, { useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa";

export const SearchInput = ({ setSearch }) => {
  const ref = useRef(null);
  return (
    <>
      <div className="relative h-full">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (ref.current) setSearch(ref.current.value);
          }}
        >
          <div className="absolute inset-y-0 flex items-center left-3 pointer-events-none">
            <FaGamepad className="text-gray-400 dark:text-gray-500" />
          </div>
          <input
            ref={ref}
            placeholder="Search games"
            className="p-3 w-full h-full dark:bg-gray-700 text-gray-900 dark:text-white rounded-full px-10 focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-2 p-2.5 h-full text-white rounded-e-full"
          >
            <BiSearch />
          </button>
        </form>
      </div>
    </>
  );
};
