import { BrandLogo } from "@/components/shared/brand-logo";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full backdrop-blur-xl transition-all bg-background/80 border-b">
      <MaxWidthWrapper className="flex justify-between items-center">
        {/* Brand Logo */}
        <Link href={"/"}>
          <BrandLogo />
        </Link>

        {/* Navigation */}
        <div className="flex gap-3">
          <Button variant={"ghost"}>Feedback</Button>
          <Button variant={"outline"}>Sign In</Button>
          <Button variant={"default"}>Sign Up</Button>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};
