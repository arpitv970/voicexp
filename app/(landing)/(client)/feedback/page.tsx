"use client";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import React from "react";
import { FeedbackForm } from "../../_components/feedback-form";

const FeedBackPage = () => {
  return (
    <div className="mt-4">
      <MaxWidthWrapper>
        <FeedbackForm />
      </MaxWidthWrapper>
    </div>
  );
};

export default FeedBackPage;
