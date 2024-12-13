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
        <aside className="hidden md:block bg-gray-800 text-white p-4">
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
        <main className="bg-gray-100 p-6 dc">
          <h2 className="text-2xl font-semibold mb-4">Welcome to the App</h2>
          <GameGrid />
        </main>
      </div>
    </>
  );
}
