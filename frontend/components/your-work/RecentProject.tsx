import Link from "next/link";
import React from "react";

type Project = {
  title: string;
  type: string;
  openissue: number;
  doneissue: number;
  boards: number;
};

type Props = {
  project: Project[];
};

const RecentProject: React.FC<Props> = ({ project }) => {
  return (
    <div className="mt-10 bg-slate-50 block">
      <div className="px-8 py-4">
        {project.length > 0 ? (
          <div className="w-full h-auto">
            <div className="flex justify-between">
              <div className="text-sm font-medium text-gray-700">
                Recent Projects
              </div>
              <div className="text-sm text-blue-600 cursor-pointer hover:text-blue-800 transition-all ease-in-out duration-300">
                view all projects
              </div>
            </div>

            <div className="flex gap-3">
              {project.map((proj, id) => {
                return (
                  <div key={id} className="mt-2">
                    <div className="flex flex-col w-60 rounded h-40 bg-white shadow shadow-gray-300 border-l-[20px] border-violet-300 gap-2">
                      <Link
                        // make it deepak/projects
                        href={"/projects"}
                        className="flex ml-[-8px] mt-4"
                      >
                        <span>
                          <div className="h-5 w-5 bg-red-400 rounded-md"></div>
                        </span>
                        <div className="flex flex-col ml-2">
                          <div className="text-xs font-semibold">
                            {proj.title}
                          </div>
                          <div className="text-[9px]">{proj.type}</div>
                        </div>
                      </Link>

                      <div className="mx-5 ">
                        <div className="text-xs font-semibold text-gray-400">
                          QUICK LINKS
                        </div>

                        <div className="flex justify-between mt-1 hover:bg-gray-100 py-1 px-1 ml-[-2px] rounded cursor-pointer">
                          <div className="text-[11px]">My open issues</div>
                          <div className="text-[11px] bg-gray-300 rounded-xl px-3">
                            {proj.openissue}
                          </div>
                        </div>
                        <div className="flex justify-between hover:bg-gray-100 py-1 px-1 ml-[-2px] rounded cursor-pointer">
                          <div className="text-[11px]">Done issues</div>
                          {/* <div className="text-[11px] bg-gray-300 rounded-xl px-3">
                              {proj.doneissue}
                            </div> */}
                        </div>
                      </div>

                      <div className="border-t border-gray-200">
                        <button className="text-[11px] ml-4 mt-1 hover:bg-gray-100 px-2 rounded cursor-pointer pt-[1px] text-gray-700 flex ">
                          <div>
                            <span>{proj.boards}</span> board
                          </div>
                          <span className="mt-[-2px]">
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                              role="presentation"
                            >
                              <path
                                d="M8.292 10.293a1.009 1.009 0 000 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 000-1.419.987.987 0 00-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 00-1.406 0z"
                                fill="currentColor"
                                fill-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className=" w-full h-52 flex justify-center items-center">
            <div className="flex flex-col items-center">
              <div className="">
                <div className="text-gray-700 text-sm text-center">
                  You have no recently viewed projects
                </div>
              </div>
              <div className="mt-5">
                <button className="bg-blue-800 text-white p-1 rounded text-sm text-center">
                  <span>view all projects</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentProject;
