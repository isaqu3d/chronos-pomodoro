import { Timer } from "lucide-react";

export function Logo() {
  return (
    <div className="flex flex-col items-center text-green-700">
      <Timer size={36} />

      <h1 className="text-4xl font-semibold">Chronos</h1>
    </div>
  );
}
