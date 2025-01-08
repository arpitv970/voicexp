import { cn } from "@/lib/utils";

interface IBrandLogo {
  className?: string;
}

export const BrandLogo: React.FC<IBrandLogo> = ({ className }) => {
  return (
    <span
      className={cn("text-3xl font-black tracking-tight font-sans", className)}
    >
      Acme Inc.
    </span>
  );
};
