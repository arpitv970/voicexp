import { Dashboard } from "@/components/shared/dashboard";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Dashboard>{children}</Dashboard>;
};

export default DashboardLayout;
