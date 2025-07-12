export function Cycles() {
  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <span>Ciclos:</span>

      <div className="flex gap-2">
        <span className="w-8 h-8 bg-green-600 rounded-4xl"></span>

        <span className="w-8 h-8 bg-yellow-600 rounded-4xl"></span>

        <span className="w-8 h-8 bg-red-600 rounded-4xl"></span>
      </div>
    </div>
  );
}
