"use client";
import { useEffect, useState } from "react";
import { IFeedback } from "@/lib/interfaces";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export default function FeedBackDashboard() {
  const [data, setData] = useState<IFeedback[]>([]);

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== "undefined") {
      const feedbacks = localStorage.getItem("feedbacks");

      // If there are feedbacks, parse and set them to state
      if (feedbacks) {
        try {
          setData(JSON.parse(feedbacks));
        } catch (error) {
          console.error("Failed to parse feedbacks from localStorage", error);
          setData([]); // Fallback in case of parse error
        }
      }
    }
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
