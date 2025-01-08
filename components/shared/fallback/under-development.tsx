import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface IUnderDevelopmen {
  children?: React.ReactNode;
  className?: string;
}
export const UnderDevelopment: React.FC<IUnderDevelopmen> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("", className)}>
      <p className="text-3xl lg:text-4xl font-bold lg:font-black font-serif tracking-tighter text-center text-nowrap">
        🚧 Under Development
      </p>
      {children ? (
        <div className="my-3 px-5">
          <Separator />
          <div className="my-3 tracking-wide font-mono text-center mx-auto flex flex-wrap justify-center items-center gap-3">
            {children}
          </div>
        </div>
      ) : null}
    </div>
  );
};
