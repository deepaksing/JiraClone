import React from "react";

type Props = {};

const RecentIssue = (props: Props) => {
  const RecentIssueNav = [
    { title: "Worked on" },
    { title: "Viewed" },
    { title: "Assigned to me" },
    { title: "Starred" },
  ];
  return (
    <div className="ml-8 mt-10">
      <div className="flex gap-4 border-b-2 border-gray-200 pb-[1px]">
        {RecentIssueNav.map((nav, id) => {
          return (
            <div
              key={id}
              className="text-sm font-semibold text-gray-800 cursor-pointer hover:text-blue-600 delay-100 ease-in-out"
            >
              {nav.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentIssue;
