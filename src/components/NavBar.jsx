import React from "react";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";

export const NavBar = () => {
  return (
    <div className="flex justify-between w-full items-center">
      <span className="font-bold">GameHub</span>
      <div className="flex space-x-6 ml-6">
        <SearchInput />
        <ColorModeSwitch />
      </div>
    </div>
  );
};
