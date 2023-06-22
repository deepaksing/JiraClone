import { Spinner } from "@/components/Spinner";
import YourWork from "@/components/your-work/page";
import { SoftwareLayout } from "@/layout/auth-layout";
import React from "react";

type Props = {};

//while loading the workspace..
{
  /* <div className="grid h-screen place-items-center ">
  <div className="flex flex-col items-center gap-3 text-center">
    <h3 className="text-xl">Loading your workspace...</h3>
    <Spinner />
  </div>
</div> */
}

const WorkspacePage = (props: Props) => {
  return (
    <SoftwareLayout>
      <YourWork />
    </SoftwareLayout>
  );
};

export default WorkspacePage;
