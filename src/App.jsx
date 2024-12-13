import { useState } from "react";
import GameGenres from "./components/GameGenres";
import { GameGrid } from "./components/GameGrid";
import { NavBar } from "./components/NavBar";
import { PlatformSelector } from "./components/PlatformSelector";
import { SortSelector } from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectOrdering, setSelectedOrdering] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div className="h-screen grid grid-rows-[auto_1fr] grid-cols-1 md:grid-cols-[auto_1fr]">
        {/* Navbar */}
        <nav className="row-span-1 col-span-3 text-gray-900 bg-gray-300  dark:bg-gray-900 dark:text-white p-4 flex justify-between items-center">
          <NavBar setSearch={(search) => setSearchQuery(search)} />
        </nav>

        {/* Sidebar */}
        <aside className="hidden md:block  text-gray-900 bg-gray-300  dark:bg-gray-900 dark:text-white  p-4 ">
          <h1 className="mb-4 font-medium text-2xl">Home</h1>
          <GameGenres
            selectedGenre={selectedGenre?.id}
            selectGenre={(genre) => setSelectedGenre(genre)}
          />
        </aside>

        {/* Main Content */}
        <main className=" dark:bg-gray-900 p-6">
          <div className="mb-4">
            <GameHeading
              selectedGenre={selectedGenre}
              selectedPlatform={selectedPlatform}
            />
          </div>
          <div className="flex space-x-4">
            <PlatformSelector
              selectPlatform={(platform) => setSelectedPlatform(platform)}
            />
            <SortSelector
              selectOrdering={(order) => setSelectedOrdering(order)}
            />
          </div>

          <GameGrid
            selectedGenre={selectedGenre?.id}
            selectedPlatform={selectedPlatform?.id}
            selectedOrdering={selectOrdering}
            searchedQuery={searchQuery}
          />
        </main>
      </div>
    </>
  );
}
