import { tv } from "tailwind-variants";

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: "green" | "red";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function DefaultButton({
  icon,
  color = "green",
  className,
  ...rest
}: DefaultButtonProps) {
  const button = tv({
    base: "text-gray-600 flex items-center justify-center p-1 max-w-48 w-screen rounded-lg cursor-pointer hover:bg-opacity-80 transition-colors duration-300 my-8",
    variants: {
      color: {
        green: "bg-green-600 hover:bg-green-700",
        red: "bg-red-600 hover:bg-red-700",
      },
    },
    defaultVariants: {
      color: "green",
    },
  });

  return (
    <>
      <button className={button({ color, className })} {...rest}>
        {icon}
      </button>
    </>
  );
}
