import { cn } from "@/lib/utils";

interface IBrandLogo {
  className?: string;
}

export const BrandLogo: React.FC<IBrandLogo> = ({ className }) => {
  return (
    <span
      className={cn(
        "text-2xl md:text-3xl font-black tracking-tight font-sans",
        className,
      )}
    >
      Acme
    </span>
  );
};
