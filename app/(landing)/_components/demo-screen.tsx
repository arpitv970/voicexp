import { UnderDevelopment } from "@/components/shared/fallback/under-development";
import { GithubRepoBtn } from "@/components/shared/github-repo-btn";
import { cn } from "@/lib/utils";

interface IDemoScreen {
  className?: string;
}
export const DemoScreen: React.FC<IDemoScreen> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex min-h-[800px] w-full max-w-[1200px] rounded-lg overflow-hidden bg-[#36393f] text-secondary",
        className,
      )}
    >
      <div className="h-full w-full flex justify-center items-center m-auto text-center">
        <UnderDevelopment>
          Meanwhile Please checkout our{" "}
          <GithubRepoBtn>GitHub Repo</GithubRepoBtn>
        </UnderDevelopment>
      </div>
    </div>
  );
};
