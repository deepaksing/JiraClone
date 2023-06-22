import Navbar from "@/components/Navbar";
import React from "react";
import { WorkspaceAuthorizationLayout } from "./workspace-authorization";

type Props = {
  children: React.ReactNode;
};

export const SoftwareLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-screen flex flex-col relative">
      <Navbar />
      <div className="h-full w-full overflow-hidden">
        <div className="relative h-full w-full overflow-x-hidden overflow-y-scroll">
          {children}
        </div>
      </div>
    </div>
  );
};
