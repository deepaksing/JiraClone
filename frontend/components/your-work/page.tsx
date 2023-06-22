import Link from "next/link";
import React from "react";
import RecentProject from "./RecentProject";
import RecentIssue from "./RecentIssue";

type Props = {};

const YourWork = (props: Props) => {
  const project = [
    {
      title: "JiraClone",
      type: "Company-managed software",
      openissue: 0,
      doneissue: 0,
      boards: 1,
    },
  ];

  return (
    <div className="h-full w-full">
      <div className="m-8">
        <div className="block text-xl text-gray-700 font-semibold">
          Your Work
        </div>
      </div>

      <RecentProject project={project} />

      <RecentIssue />
    </div>
  );
};

export default YourWork;
