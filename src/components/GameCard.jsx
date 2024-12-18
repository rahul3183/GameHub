import React from "react";
import { PlatformIconList } from "./PlatformIconList";
import MetacriticScore from "./MetacriticScore";
import NoImage from "../assets/No_Image_Placeholder.png";

export const GameCard = ({ game }) => {
  const getCroppedImage = (url) => {
    if (!url) return NoImage;
    const index = url.indexOf("media/") + "media/".length;
    return url.slice(0, index) + "crop/600/400/" + url.slice(index);
  };

  return (
    <>
      <div className="bg-white rounded-lg dark:bg-gray-800 shadow-2xl">
        <img
          className="rounded-t-lg w-full  overflow-hidden cursor-pointer hover:brightness-75"
          src={getCroppedImage(game.background_image)}
          alt={game.name}
        />
        <div className="p-5">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {game.name}
          </h3>
          <div className="flex items-center justify-between mt-4">
            <div>
              {
                <PlatformIconList
                  platforms={game.parent_platforms.map((p) => p.platform)}
                />
              }
            </div>
            <div>
              <MetacriticScore score={game.metacritic} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
