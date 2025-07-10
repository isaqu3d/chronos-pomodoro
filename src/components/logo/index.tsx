import { Timer } from "lucide-react";

export function Logo() {
  return (
    <div className="flex justify-center items-center text-green-700 hover:brightness-75 transition pt-14 ">
      <a
        href=""
        className="flex flex-col items-center justify-center gap-2 font-semibold text-5xl "
      >
        <Timer className="w-12 h-12" />

        <h1 className="">Chronos</h1>
      </a>
    </div>
  );
}
