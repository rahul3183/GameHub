import React from "react";

const MetacriticScore = ({ score }) => {
  const color =
    score > 75
      ? "bg-green-900 text-green-400 rounded-md"
      : score > 60
      ? "bg-yellow-600 text-yellow-400 rounded-md"
      : "rounded-md";
  return (
    <>
      <div className={[color]} title="Metacritic Score">
        <p className="px-2 font-medium">{score}</p>
      </div>
    </>
  );
};

export default MetacriticScore;
