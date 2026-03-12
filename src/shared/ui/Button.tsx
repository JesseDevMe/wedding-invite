import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

export const Button = ({
  children,
  className,
  variant = "secondary",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "px-4 py-2 border-2 rounded-2xl w-fit mx-auto bg-transparent font-semibold cursor-pointer",
        className,
        variant === "primary"
          ? "text-wine border-wine"
          : "text-background border-background",
      )}
      {...props}
    >
      {children}
    </button>
  );
};
