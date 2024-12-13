import React from "react";
import { ColorModeSwitch } from "./ColorModeSwitch";

export const NavBar = () => {
  return (
    <div className="flex justify-between w-full">
      <span className="font-bold">GameHub</span>
      <ColorModeSwitch />
    </div>
  );
};
