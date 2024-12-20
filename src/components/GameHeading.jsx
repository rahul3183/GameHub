import React from "react";

const GameHeading = ({ selectedGenre, selectedPlatform }) => {
  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  }  New and trending`;
  return (
    <>
      <h1 className="dark:text-white text-gray-900 text-6xl font-bold">
        {heading}
      </h1>
    </>
  );
};

export default GameHeading;
