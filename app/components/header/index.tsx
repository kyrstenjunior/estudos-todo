import ThemeToggle from "./theme-toggle";
import { Search } from "lucide-react";

function Header() {
  return (
    <header className="flex items-center justify-between w-full py-4 px-8">
      <div className="max-w-[448px] w-full h-9">
        <div className="bg-gray-100  dark:bg-zinc-800 w-full h-full relative rounded-lg">
          <Search size={16} className="absolute text-zinc-500 left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            name="searchbar"
            id="searchbar"
            placeholder="Buscar projetos..."
            className="w-full h-full pl-10 rounded-lg focus:outline-0 text-sm text-zinc-500 placeholder:text-zinc-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm dark:text-white">Olá, Kyrsten!</span>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header