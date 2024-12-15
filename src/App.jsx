import { GameGrid } from "./components/GameGrid";
import { NavBar } from "./components/NavBar";

export default function App() {
  return (
    <>
      <div className="h-screen grid grid-rows-[auto_1fr] grid-cols-1 md:grid-cols-[auto_1fr]">
        {/* Navbar */}
        <nav className="row-span-1 col-span-3 bg-blue-500 text-white p-4 flex justify-between items-center">
          <NavBar />
        </nav>

        {/* Sidebar */}
        <aside className="hidden md:block dark:bg-gray-900 text-white p-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Help
              </a>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className=" dark:bg-gray-800 p-6">
          <GameGrid />
        </main>
      </div>
    </>
  );
}
