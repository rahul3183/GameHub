import React, { useState } from "react";
import { CgClose } from "react-icons/cg";

const Banner = ({ promotionalText }) => {
  const [showBanner, setShowBanner] = useState(true);
  return (
    <>
      {showBanner && (
        <div className="w-full p-4 flex justify-between rounded-lg items-center bg-gradient-to-b from-red-400 to-pink-500">
          <p className="text-white text-lg font-bold px-4">{promotionalText}</p>
          <button
            onClick={() => setShowBanner(!showBanner)}
            className="bg-gray-200 rounded-full p-2 hover:opacity-100 opacity-40 transition-opacity duration-300"
          >
            <CgClose color="black" />
          </button>
        </div>
      )}
    </>
  );
};

export default Banner;
