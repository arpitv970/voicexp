import { GithubIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface IGithubRepoBtn {
  className?: string;
  children?: React.ReactNode;
}

export const GithubRepoBtn: React.FC<IGithubRepoBtn> = ({
  className,
  children,
}) => {
  return (
    <Link target="_blank" href={"https://github.com/arpitv970/voicexp"}>
      <Button
        size={children ? "default" : "icon"}
        className={cn(
          "bg-gradient-to-bl from-violet-600 to-violet-900 z-10 drop-shadow-lg transition-all duration-300 ease-linear hover:drop-shadow-2xl",
          className,
        )}
      >
        <GithubIcon className="size-5" />
        {children ? children : null}
      </Button>
    </Link>
  );
};
