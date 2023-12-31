"use client";

import React, { useEffect, useState } from "react";
import "../styles/workspace.css";
import NavElement from "./NavElement";
import renderNavElement from "@/utils/navElement";

type Props = {};

const Navbar: React.FC<Props> = (props) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const moreElement = {
    title: "More",
    path: undefined,
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); //set initial width

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { visibleNavElements, showMoreNav } = renderNavElement(windowWidth);

  const tooltip = () => {
    return (
      <div className="z-50">
        <div className="fixed translate-x-14 translate-y-96">
          <div
            role="tooltip"
            className="max-w-xs rounded bg-gray-900 text-white"
            data-placement="bottom"
            id="66val-tooltip"
          >
            Help
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-screen flex box-border items-center justify-between h-14 px-3 text-gray-700 font-semibold text-sm shadow">
      <div className="flex min-w-0 items-center grow h-full">
        <div className="flex relative items-stretch grow shrink-0 basis-0 h-full ">
          {visibleNavElements.map((navElement, index) => (
            <NavElement key={index} nav={navElement} />
          ))}
          {showMoreNav && <NavElement nav={moreElement} />}

          <div className="flex items-center ml-2 relative">
            {/* upper */}
            <button className="bg-blue-700 text-white px-3 relative text-center rounded h-8 w-auto max-w-full whitespace-nowrap align-middle lg:hidden xl:block md:hidden sm:hidden">
              <span className="grow shrink mx-0.5">Create</span>
            </button>
            {/* lower */}
            <button className="bg-blue-700 text-white px-3 relative text-center rounded h-8 w-auto max-w-full whitespace-nowrap align-middle xl:hidden lg:block">
              <span className="grow shrink mx-0.5">+</span>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full shrink relative min-w-0">
        <div className="absolute w-full"></div>
      </div>

      <div className="flex shrink-0 items-center">
        <div className="relative items-center flex w-50 max-w-full">
          <span className="absolute w-4 h-4 top-2 left-2">
            <span
              role="img"
              aria-label="search"
              className="inline-block w-4 h-4"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                role="presentation"
              >
                <path
                  d="M16.436 15.085l3.94 4.01a1 1 0 01-1.425 1.402l-3.938-4.006a7.5 7.5 0 111.423-1.406zM10.5 16a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </span>
          <input
            placeholder="Search"
            // default=""
            className="h-8 w-full pr-3 pl-7 rounded shadow-none border-2 border-zinc-300 font-normal focus:outline-none focus:border-blue-400 select-none"
            value=""
          ></input>
        </div>
        <div className="relative">
          <button className="flex max-w-full relative text-center cursor-pointer h-auto w-auto rounded-full hover:bg-blue-200 p-1 mx-1">
            <span className="flex grow-0 shrink-0 select-none ">
              <span
                role="img"
                aria-label="Notifications"
                className="inline-block shrink-0"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  role="presentation"
                >
                  <path
                    d="M6.485 17.669a2 2 0 002.829 0l-2.829-2.83a2 2 0 000 2.83zm4.897-12.191l-.725.725c-.782.782-2.21 1.813-3.206 2.311l-3.017 1.509c-.495.248-.584.774-.187 1.171l8.556 8.556c.398.396.922.313 1.171-.188l1.51-3.016c.494-.988 1.526-2.42 2.311-3.206l.725-.726a5.048 5.048 0 00.64-6.356 1.01 1.01 0 10-1.354-1.494c-.023.025-.046.049-.066.075a5.043 5.043 0 00-2.788-.84 5.036 5.036 0 00-3.57 1.478z"
                    fill="currentColor"
                    // fill-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </button>
        </div>
        <div className="relative">
          <button className="flex max-w-full relative text-center cursor-pointer h-auto w-auto rounded-full hover:bg-blue-200 p-1 mx-1">
            <span className="flex grow-0 shrink-0 select-none ">
              <span
                role="img"
                aria-label="Notifications"
                className="inline-block shrink-0"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  role="presentation"
                >
                  <g
                  // fill-rule="evenodd"
                  >
                    <circle fill="currentColor" cx="12" cy="12" r="10"></circle>
                    <circle fill="white" cx="12" cy="18" r="1"></circle>
                    <path
                      d="M15.89 9.05a3.975 3.975 0 00-2.957-2.942C10.321 5.514 8.017 7.446 8 9.95l.005.147a.992.992 0 00.982.904c.552 0 1-.447 1.002-.998a2.004 2.004 0 014.007-.002c0 1.102-.898 2-2.003 2H12a1 1 0 00-1 .987v2.014a1.001 1.001 0 002.004 0v-.782c0-.217.145-.399.35-.472A3.99 3.99 0 0015.89 9.05"
                      fill="white"
                    ></path>
                  </g>
                </svg>
              </span>
            </span>
          </button>
        </div>
        <div className="relative">
          <button className="flex max-w-full relative text-center cursor-pointer h-auto w-auto rounded-full hover:bg-blue-200 p-1 mx-1">
            <span className="flex grow-0 shrink-0 select-none ">
              <span
                role="img"
                aria-label="Notifications"
                className="inline-block shrink-0"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  role="presentation"
                >
                  <path
                    d="M11.701 16.7a5.002 5.002 0 110-10.003 5.002 5.002 0 010 10.004m8.368-3.117a1.995 1.995 0 01-1.346-1.885c0-.876.563-1.613 1.345-1.885a.48.48 0 00.315-.574 8.947 8.947 0 00-.836-1.993.477.477 0 00-.598-.195 2.04 2.04 0 01-1.29.08 1.988 1.988 0 01-1.404-1.395 2.04 2.04 0 01.076-1.297.478.478 0 00-.196-.597 8.98 8.98 0 00-1.975-.826.479.479 0 00-.574.314 1.995 1.995 0 01-1.885 1.346 1.994 1.994 0 01-1.884-1.345.482.482 0 00-.575-.315c-.708.2-1.379.485-2.004.842a.47.47 0 00-.198.582A2.002 2.002 0 014.445 7.06a.478.478 0 00-.595.196 8.946 8.946 0 00-.833 1.994.48.48 0 00.308.572 1.995 1.995 0 011.323 1.877c0 .867-.552 1.599-1.324 1.877a.479.479 0 00-.308.57 8.99 8.99 0 00.723 1.79.477.477 0 00.624.194c.595-.273 1.343-.264 2.104.238.117.077.225.185.302.3.527.8.512 1.58.198 2.188a.473.473 0 00.168.628 8.946 8.946 0 002.11.897.474.474 0 00.57-.313 1.995 1.995 0 011.886-1.353c.878 0 1.618.567 1.887 1.353a.475.475 0 00.57.313 8.964 8.964 0 002.084-.883.473.473 0 00.167-.631c-.318-.608-.337-1.393.191-2.195.077-.116.185-.225.302-.302.772-.511 1.527-.513 2.125-.23a.477.477 0 00.628-.19 8.925 8.925 0 00.728-1.793.478.478 0 00-.314-.573"
                    fill="currentColor"
                    // fill-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </button>
        </div>
        <div className="relative">
          <button className="flex max-w-full relative text-center cursor-pointer h-auto w-auto rounded-full hover:bg-blue-200 p-1 mx-1">
            <span className="flex grow-0 shrink-0 select-none bg-blue-600 p-1 rounded-full">
              <span className="select-none text-xs text-white font-light">
                AC
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Add tooltop */}
    </div>
  );
};

export default Navbar;
