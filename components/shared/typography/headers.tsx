import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface IH1 extends HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
}
export const H1: React.FC<IH1> = ({ children, className, ...props }) => {
  return (
    <h1
      className={cn(
        "text-4xl sm:text-5xl text-pretty font-semibold tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
};
