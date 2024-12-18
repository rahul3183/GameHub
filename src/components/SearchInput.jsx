import { Input } from "postcss";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa";

export const SearchInput = () => {
  return (
    <>
      <div className="relative">
        <div class="absolute inset-y-0 flex items-center ps-3">
          <FaGamepad className="bg-gray-800" />
        </div>
        <input
          placeholder="Search games"
          className=" p-2.5 h-full dark:bg-gray-800 text-gray-900 dark:text-white rounded-full px-10"
        />
        <button
          type="submit"
          class="absolute top-0 end-0 p-2.5 h-full text-white bg-gray-900 rounded-e-full  dark:bg-gray-700"
        >
          <BiSearch />
        </button>
      </div>
    </>
  );
};
