export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[98rem] mx-auto ">
      <div className="m-8">{children}</div>
    </div>
  );
}
