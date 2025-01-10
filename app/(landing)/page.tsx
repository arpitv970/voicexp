import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { ShinyButton } from "@/components/shared/shiny-button";
import { H1 } from "@/components/shared/typography/headers";
import { CheckIcon } from "lucide-react";
import { DemoScreen } from "./_components/demo-screen";

const LandingHomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32">
        <MaxWidthWrapper>
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <div>
              <H1>
                <span>Effortless feedback collection,</span>
                <br />
                <span className="relative bg-gradient-to-r from-violet-600 to-violet-900 text-transparent bg-clip-text">
                  Enhance experiences today.
                </span>
              </H1>
            </div>
            <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
              Simplify the way you gather, manage, and analyze feedback with our
              intuitive dashboard. Gain insights, improve processes, and empower
              your team to deliver better outcomes.
            </p>
            <ul className="space-y-2 text-base/7 text-gray-600 flex flex-col items-start">
              {[
                "Centralized dashboard to manage all feedback.",
                "Support for audio feedback for better clarity.",
                "Advanced sorting and filtering for seamless navigation.",
                "Quick playback of audio responses directly from the platform.",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-1.5 items-center text-left">
                  <CheckIcon className="text-violet-500" />
                  {item}
                </li>
              ))}
            </ul>
            <div>
              <ShinyButton
                href={"/dashboard"}
                className="bg-gradient-to-bl from-violet-500 to-violet-900 transition-all shadow-xl hover:shadow-2xl"
              >
                Get Started
              </ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Demo Screen / Video / Graphics */}
      <section className="relative bg-background/5 pb-4">
        <div className="absolute inset-x-0 bottom-24 top-24 bg-primary" />
        <div className="relative mx-auto">
          <MaxWidthWrapper className="relative">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <DemoScreen />
            </div>
          </MaxWidthWrapper>
        </div>
      </section>
    </>
  );
};

export default LandingHomePage;
