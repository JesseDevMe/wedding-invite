import { twMerge } from "tailwind-merge";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({
  children,
  className,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={twMerge("px-4 py-25 min-w-[360] w-full mx-auto", className)}
      {...props}
    >
      {children}
    </div>
  );
};
