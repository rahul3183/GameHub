import React, { useEffect, useState } from "react";
import axiosClient from "../server/axios-client";
import { BiChevronDown } from "react-icons/bi";

export const PlatformSelector = ({ selectPlatform }) => {
  const [platformData, setPlatformData] = useState([]);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState("Platforms");
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
          className="w-full flex items-center justify-between bg-white rounded-md py-2 px-4 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
        >
          <span>{selected}</span>
          {/* Down Arrow */}
          <BiChevronDown
            className={` transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && (
          <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-600">
            {platformData.map((platform) => (
              <li
                key={platform.id}
                onClick={() => {
                  selectPlatform(platform);
                  setSelected(platform.name);
                  setIsOpen(false);
                }}
                className={`cursor-pointer px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white dark:text-gray-200 dark:hover:bg-gray-600  `}
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
