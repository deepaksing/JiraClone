"use client";
import React from "react";
import { usePathname } from "next/navigation";

type Props = {
  nav: {
    title: string;
    path: string | undefined;
  };
};

const NavElement: React.FC<Props> = ({ nav }) => {
  const pathname = usePathname();
  console.log(pathname, "deepak/" + nav.path);
  return (
    <div
      className={`flex relative items-center justify-center flex-col h-full mx-1 nav_element ${
        pathname == "/deepak" + nav.path
          ? "after:opacity-100"
          : "after:opacity-0"
      }`}
    >
      <button
        className={`items-center box-border inline-flex max-w-full text-center cursor-pointer w-auto whitespace-nowrap align-middle rounded px-1 hover:bg-blue-100 hover:text-blue-600 h-9 nav_element_btn ${
          pathname == "/deepak" + nav.path ? "text-blue-600" : ""
        }`}
      >
        <div className="opacity-100 grow shrink whitespace-nowrap text-ellipsis overflow-hidden">
          {nav.title}
        </div>
        <span className="flex mt-1.5 grow-0 shrink-0 select-none">
          <span className="opacity-50 ">
            <span aria-hidden="true" className="inline-block leading-none">
              <svg
                width="20"
                height="20"
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
          </span>
        </span>
      </button>
    </div>
  );
};

export default NavElement;
