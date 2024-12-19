import React from "react";

const GameHeading = ({ selectedGenre, selectedPlatform }) => {
  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  }  Games`;
  return (
    <>
      <h1 className="dark:text-white text-gray-900 text-3xl font-bold">
        {heading}
      </h1>
    </>
  );
};

export default GameHeading;
