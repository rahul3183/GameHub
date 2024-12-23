import React, { useEffect, useState } from "react";
import axiosClient from "../server/axios-client";
import { CanceledError } from "axios";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

export const GameGrid = ({
  selectedGenre,
  selectedPlatform,
  selectedOrdering,
  searchedQuery,
}) => {
  const [gameData, setGameData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    const controller = new AbortController();
    setGameData([]);
    setLoading(true);
    axiosClient
      .get("/games", {
        signal: controller.signal,
        params: {
          genres: selectedGenre,
          platforms: selectedPlatform,
          ordering: selectedOrdering,
          search: searchedQuery,
        },
      })
      .then((res) => {
        setGameData(res.data.results);
        setLoading(false);
        setError("");
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setLoading(false);
        setError("Failed to fetch game data.");
      });

    return () => controller.abort();
  }, [selectedGenre, selectedPlatform, selectedOrdering, searchedQuery]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 mb-20">
        {error && <p style={{ color: "red" }}>{error}</p>}{" "}
        {isLoading && skeleton.map((item) => <GameCardSkeleton key={item} />)}
        {gameData.map((data) => (
          <GameCard game={data} key={data.id} />
        ))}
      </div>
    </>
  );
};
