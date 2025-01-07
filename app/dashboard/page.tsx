import { FeedbackCategory } from "@/components/charts/feedback-category";
import { FeedbackTrend } from "@/components/charts/feedback-trend";
import { SentimentAnalysis } from "@/components/charts/sentiment-analysis";
import { WidgetCards } from "@/components/shared/widget-card";

export default function Page() {
  return (
    <>
      <div className="grid auto-rows-min gap-4 md:grid-cols-4">
        <WidgetCards
          label="Total Feedback"
          diffUnit="%"
          diff={12}
          secondaryText="vs. Last Month"
        >
          1,234
        </WidgetCards>

        <WidgetCards
          label="Average Sentiment"
          diffUnit="%"
          diff={2.1}
          secondaryText="vs. Last Month"
        >
          4.5
        </WidgetCards>

        <WidgetCards
          label="Total Feedback"
          diffUnit="%"
          diff={-1.2}
          secondaryText="vs. Last Month"
        >
          89%
        </WidgetCards>

        <WidgetCards
          label="Total Feedback"
          diffUnit="s"
          diff={0.3}
          secondaryText="vs. Last Month"
        >
          1.2s
        </WidgetCards>
      </div>

      <div className="grid auto-rows-min gap-4 md:grid-cols-2">
        <FeedbackCategory />
        <SentimentAnalysis />
      </div>
      <div>
        <FeedbackTrend />
      </div>
    </>
  );
}
