type DefaultButtonProps = {
  icon: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function DefaultButton({ icon, ...rest }: DefaultButtonProps) {
  return (
    <>
      <button
        className="bg-green-600 text-gray-600 flex items-center justify-center p-2 max-w-48 w-screen rounded-lg cursor-pointer hover:bg-green-700 transition-colors duration-300 my-8"
        {...rest}
      >
        {icon}
      </button>
    </>
  );
}
