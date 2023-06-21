import Navbar from "@/components/Navbar";
import React from "react";
import { WorkspaceAuthorizationLayout } from "./workspace-authorization";

type Props = {
  children: React.ReactNode;
};

export const SoftwareLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <WorkspaceAuthorizationLayout>{children}</WorkspaceAuthorizationLayout>
    </>
  );
};
