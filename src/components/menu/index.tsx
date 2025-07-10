import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";

export function Menu() {
  return (
    <nav className="flex justify-center items-center gap-4 pt-14">
      <a
        href=""
        className="inline-flex bg-[#0da170] text-[#0a0f1a] p-3 rounded-md hover:brightness-75 transition"
      >
        <HouseIcon className="w-7 h-7" />
      </a>

      <a
        href=""
        className="inline-flex bg-[#0da170] text-[#0a0f1a] p-3 rounded-md hover:brightness-75 transition"
      >
        <HistoryIcon className="w-7 h-7" />
      </a>

      <a
        href=""
        className="inline-flex bg-[#0da170] text-[#0a0f1a] p-3 rounded-md hover:brightness-75 transition"
      >
        <SettingsIcon className="w-7 h-7" />
      </a>

      <a
        href=""
        className="inline-flex bg-[#0da170] text-[#0a0f1a] p-3 rounded-md hover:brightness-75 transition"
      >
        <SunIcon className="w-7 h-7" />
      </a>
    </nav>
  );
}
