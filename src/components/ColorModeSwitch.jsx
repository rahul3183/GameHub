import React, { useState } from "react";

export const ColorModeSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log("Toggle Dark Mode");
  };

  return (
    <>
      <label className="flex cursor-pointer items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div
            className={`box block h-7 w-12 rounded-full ${
              isChecked ? "bg-blue-900" : "bg-blue-600"
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white transition ${
              isChecked ? "translate-x-full" : ""
            }`}
          ></div>
        </div>
        <span className="mx-2">{isChecked ? "Dark Mode" : "Light Mode"}</span>
      </label>
    </>
  );
};
