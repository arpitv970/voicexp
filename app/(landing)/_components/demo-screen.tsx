import { UnderDevelopment } from "@/components/shared/fallback/under-development";
import { GithubRepoBtn } from "@/components/shared/github-repo-btn";
import { cn } from "@/lib/utils";
import { FeedbackForm } from "./feedback-form";

interface IDemoScreen {
  className?: string;
}
export const DemoScreen: React.FC<IDemoScreen> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex min-h-[800px] w-full max-w-[1200px] rounded-lg overflow-hidden bg-[#36393f] text-secondary justify-center items-center",
        className,
      )}
    >
      <FeedbackForm className="min-h-[880px] m-auto flex flex-col justify-center items-center rounded-lg">
        <h1 className="text-4xl font-black font-sans tracking-tight">
          Just as for a{" "}
          <span className="relative bg-gradient-to-r from-violet-600 to-violet-900 text-transparent bg-clip-text">
            Feedback.
          </span>
        </h1>
      </FeedbackForm>
      {/*
      <div className="h-full w-full flex justify-center items-center m-auto text-center">
        <UnderDevelopment>
          Meanwhile Please checkout our{" "}
          <GithubRepoBtn>GitHub Repo</GithubRepoBtn>
        </UnderDevelopment>
      </div>
        */}
    </div>
  );
};
