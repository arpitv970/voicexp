import React from "react";
import { Dashboard } from "./_components/dashboard";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Dashboard>{children}</Dashboard>;
};

export default DashboardLayout;
