/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Dropdown from "./Dropdown/Dropdown";
import Welcome from "./Welcome/Welcome";
import ScrollContextProvider from "../context/LocomotiveScroll/scrollContext";
import useResizer from "../hooks/useResizer";

export function Layout() {
  const [locomotiveScroll, setLocomotiveScroll] = useState<any>();

  useResizer();

  useEffect(() => {
    const locomotive = new LocomotiveScroll();
    setLocomotiveScroll(locomotive);

    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <div id="layout">
      <ScrollContextProvider locomotiveScroll={locomotiveScroll}>
        <Dropdown />
        <Outlet />
        {/* <Welcome /> */}
      </ScrollContextProvider>
    </div>
  );
}
