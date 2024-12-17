import React, { useEffect, useState } from "react";
import axiosClient from "../server/axios-client";

export const PlatformSelector = () => {
  const [platformData, setPlatformData] = useState([]);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState("PC");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setPlatformData([]);
    axiosClient
      .get("/platforms", {
        signal: controller.signal,
      })
      .then((res) => {
        setPlatformData(res.data.results);
        setError("");
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError("Failed to fetch platform, data.");
      });

    return () => controller.abort();
  }, []);

  if (error) return;

  return (
    <>
      <div className="relative w-64">
        <button
          id="custom-dropdown"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600"
        >
          <span>{selected}</span>
          {/* Down Arrow */}
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        {isOpen && (
          <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-600">
            {platformData.map((platform, index) => (
              <li
                key={platform.id}
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                className={`cursor-pointer px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white dark:text-gray-200 dark:hover:bg-gray-600 `}
              >
                {platform.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};