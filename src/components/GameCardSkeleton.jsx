import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GameCardSkeleton = () => {
  return (
    <>
      <div className="bg-white rounded-lg dark:bg-gray-700 shadow-2xl">
        <SkeletonTheme baseColor="#898989" highlightColor="#b3b3b3">
          <Skeleton height={200} />
          <div className="px-4 mt-4">
            <div>
              <Skeleton />
            </div>
            <div className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mt-2 mb-8">
              <Skeleton />
            </div>
          </div>
        </SkeletonTheme>
      </div>
    </>
  );
};

export default GameCardSkeleton;
