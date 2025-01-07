import { Button } from "@/components/ui/button";
import { CircleArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center">
      <Button asChild size={"lg"}>
        <Link href={"/dashboard"}>
          Go to Dashboard
          <CircleArrowRightIcon />
        </Link>
      </Button>
    </div>
  );
}
