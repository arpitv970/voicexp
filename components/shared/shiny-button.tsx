import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

interface IShinyButton extends AnchorHTMLAttributes<HTMLAnchorElement> { }
export const ShinyButton: React.FC<IShinyButton> = ({
  children,
  className,
  href,
  ...props
}) => {
  return (
    <Link href={href ?? "#"} {...props}>
      <Button
        size={"lg"}
        className={cn(
          "group relative flex transform items-center justify-center gap-2 overflow-hidden whitespace-nowrap text-base/7 font-medium transition-all duration-300 hover:ring-2 hover:ring-primary hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2 z-10",
          className,
        )}
      >
        {children}
        <ArrowRightIcon className="size-4 shrink-0 transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
        <div className="ease-[cubic-bezier(0.19,1,0.22,1)] absolute -left-[75px] -top-[50px] -z-10 h-[155px] w-8 rotate-[35deg] bg-white opacity-20 transition-all duration-300 group-hover:left-[120%]" />
      </Button>
    </Link>
  );
};
