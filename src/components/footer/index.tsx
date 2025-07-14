export function Footer() {
  return (
    <footer className="flex items-center flex-col gap-3 text-white p-4 ">
      <p>Chronos Pomodoro &copy; {new Date().getFullYear()}.</p>
      <p>
        Feito com ❤️ por{" "}
        <a
          href="https://github.com/isaqu3d"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          Isaqu3d
        </a>
      </p>
    </footer>
  );
}
