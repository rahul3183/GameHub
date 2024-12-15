import React, { useEffect, useState } from "react";
import axiosClient from "../server/axios-client";
import { CanceledError } from "axios";
import { GameCard } from "./GameCard";

export const GameGrid = () => {
  const [gameData, setGameData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    axiosClient
      .get("/games", { signal: controller.signal })
      .then((res) => {
        setGameData(res.data.results);
        setError("");
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError("Failed to fetch game data.");
      });

    return () => controller.abort();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {error && <p style={{ color: "red" }}>{error}</p>}{" "}
        {gameData.map((data) => (
          <GameCard game={data} />
        ))}
      </div>
    </>
  );
};
