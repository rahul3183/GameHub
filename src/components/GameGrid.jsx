import React, { useEffect, useState } from "react";
import axiosClient from "../server/axios-client";

export const GameGrid = () => {
  const [gameData, setGameData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axiosClient
      .get("/games")
      .then((res) => {
        setGameData(res.data.results);
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to fetch game data.");
      });
  }, []);

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      <ul>
        {gameData.map((data) => (
          <li key={data.id}>
            <p>{data.name}</p> {/* Display game name */}
            <img
              src={data.background_image}
              alt={data.name}
              style={{ width: "200px", height: "auto" }}
            />{" "}
            {/* Display game image */}
          </li>
        ))}
      </ul>
    </div>
  );
};
