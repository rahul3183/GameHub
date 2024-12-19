import { Input } from "postcss";
import React, { useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa";

export const SearchInput = ({ setSearch }) => {
  const ref = useRef(null);
  return (
    <>
      <div className="relative">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (ref.current) setSearch(ref.current.value);
          }}
        >
          <div className="absolute inset-y-0 flex items-center ps-3">
            <FaGamepad className="bg-gray-800" />
          </div>
          <input
            ref={ref}
            placeholder="Search games"
            className="p-2.5 h-full dark:bg-gray-800 text-gray-900 dark:text-white rounded-full px-10 focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 h-full text-white bg-gray-900 rounded-e-full  dark:bg-gray-700"
          >
            <BiSearch />
          </button>
        </form>
      </div>
    </>
  );
};
