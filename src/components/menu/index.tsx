import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function Menu() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    document.documentElement.classList.toggle("dark");
  };
  return (
    <nav className="flex justify-center items-center gap-4 pt-14">
      <a
        href=""
        className="inline-flex bg-[#0da170] text-[#0a0f1a] p-3 rounded-md hover:brightness-75 transition"
        aria-label="Ir para a página inicial"
        title="Página Inicial"
      >
        <HouseIcon className="w-7 h-7" />
      </a>

      <a
        href=""
        className="inline-flex bg-[#0da170] text-[#0a0f1a] p-3 rounded-md hover:brightness-75 transition"
        aria-label="Ir para a página de histórico"
        title="Página de Histórico"
      >
        <HistoryIcon className="w-7 h-7" />
      </a>

      <a
        href=""
        className="inline-flex bg-[#0da170] text-[#0a0f1a] p-3 rounded-md hover:brightness-75 transition"
        aria-label="Ir para a página de configurações"
        title="Página de Configurações"
      >
        <SettingsIcon className="w-7 h-7" />
      </a>

      <a
        href=""
        className="inline-flex bg-[#0da170] text-[#0a0f1a] p-3 rounded-md hover:brightness-75 transition"
        aria-label="Troca de tema"
        title="Troca de Tema"
        onClick={handleThemeChange}
      >
        <SunIcon className="w-7 h-7" />
      </a>
    </nav>
  );
}
