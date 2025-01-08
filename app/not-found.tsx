import { UnderDevelopment } from "@/components/shared/fallback/under-development";
import { GithubRepoBtn } from "@/components/shared/github-repo-btn";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center m-auto">
      <MaxWidthWrapper className="flex justify-center items-center my-auto">
        <Card className="flex h-3/4 justify-center items-center w-full m-auto border-dashed">
          <CardContent>
            <UnderDevelopment>
              <div className="flex flex-col justify-between items-center m-auto gap-3">
                <p>Still Here?</p>
                <div className="flex justify-between items-center mx-auto gap-3">
                  <Link href={"/"}>
                    <Button variant={"outline"}>Home</Button>
                  </Link>
                  <GithubRepoBtn>GitHub Repo</GithubRepoBtn>
                </div>
              </div>
            </UnderDevelopment>
          </CardContent>
        </Card>
      </MaxWidthWrapper>
    </div>
  );
};

export default NotFound;
