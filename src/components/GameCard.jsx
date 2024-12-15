import React from "react";
import { PlatformIconList } from "./PlatformIconList";

export const GameCard = ({ game }) => {
  return (
    <>
      <div className="bg-white rounded-lg dark:bg-gray-900 shadow-2xl">
        <img
          className="rounded-t-lg overflow-hidden cursor-pointer hover:brightness-75"
          src={game.background_image}
          alt={game.name}
        />
        <div className="p-5">
          <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {game.name}
          </h3>
          <div>
            {
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
            }
          </div>
        </div>
      </div>
    </>
  );
};
