import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GameCardSkeleton = ({ count }) => {
  return (
    <div className="bg-white rounded-lg dark:bg-gray-900 shadow-2xl">
      <Skeleton
        count={count}
        enableAnimation={true}
        className="rounded-lg dark:bg-gray-900"
      />
    </div>
  );
};

export default GameCardSkeleton;
