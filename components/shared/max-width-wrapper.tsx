import { cn } from "@/lib/utils";

interface IMaxWidthWrapper {
  children: React.ReactNode;
  className?: string;
}
export const MaxWidthWrapper: React.FC<IMaxWidthWrapper> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "h-full w-full max-w-screen-xl mx-auto px-2.5 md:px-20",
        className,
      )}
    >
      {children}
    </div>
  );
};
