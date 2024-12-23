import React from "react";

const GameHeading = ({ selectedGenre, selectedPlatform }) => {
  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  }  ${
    selectedPlatform == null && selectedGenre == null
      ? "New and trending"
      : "Games"
  }`;
  return (
    <>
      <h1 className="dark:text-white text-gray-900 text-6xl font-bold">
        {heading}
      </h1>
    </>
  );
};

export default GameHeading;
