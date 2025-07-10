import { Home, Settings, Sun, Timer } from "lucide-react";
import { Logo } from "./logo";

export function Header() {
  return (
    <div>
      <Logo />

      <div className="flex justify-center gap-2 mt-8 ">
        <button className="bg-green-600 p-2 rounded-md hover:bg-green-500 transition-colors cursor-pointer">
          <Home />
        </button>
        <button className="bg-green-600 p-2 rounded-md hover:bg-green-500 transition-colors cursor-pointer">
          <Timer />
        </button>
        <button className="bg-green-600 p-2 rounded-md hover:bg-green-500 transition-colors cursor-pointer">
          <Settings />
        </button>
        <button className="bg-green-600 p-2 rounded-md hover:bg-green-500 transition-colors cursor-pointer">
          <Sun />
        </button>
      </div>
    </div>
  );
}
