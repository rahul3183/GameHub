import React, { useEffect, useState } from "react";
import axiosClient from "../server/axios-client";
import GameCardSkeleton from "./GameCardSkeleton";

export const GameGenres = ({ selectedGenre, selectGenre }) => {
  const [gameGenres, setGameGenres] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const getCroppedImage = (url) => {
    const index = url.indexOf("media/") + "media/".length;
    return url.slice(0, index) + "crop/600/400/" + url.slice(index);
  };

  const skeleton = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axiosClient
      .get("/genres", { signal: controller.signal })
      .then((res) => {
        setGameGenres(res.data.results);
        setLoading(false);
        setError("");
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setLoading(false);
        setError("Failed to fetch game genres.");
      });

    return () => controller.abort();
  }, []);

  return (
    <>
      {isLoading &&
        skeleton.map((item) => (
          <ul key={item}>
            <li>
              <div className="mb-6">
                <GameCardSkeleton count={1} />
              </div>
            </li>
          </ul>
        ))}
      <ul>
        {gameGenres.map((data) => (
          <li key={data.id}>
            <div className="flex mb-6 cursor-pointer">
              <img
                className="rounded-sm overflow-hidden w-8"
                src={getCroppedImage(data.image_background)}
                alt={data.name}
              />
              <button
                onClick={() => selectGenre(data.id)}
                className={`ml-4 ${
                  selectedGenre == data.id ? "text-lg font-bold" : " text-md "
                }`}
              >
                {data.name}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameGenres;
