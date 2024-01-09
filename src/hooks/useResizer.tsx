/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
// import useWindowWidth from "./useWindowWidth";

const useResizer = () => {
  // const resizeTimer = useRef<any>(0);
  // const { width } = useWindowWidth();

  useEffect(() => {
    // function handleResizeEnd() {
    //   if (width > 720 && width < 768) {
    //     // window.location.reload();
    //   }
    // }

    const checkBreakpoint = () => {
      if (window.matchMedia(`(max-width: ${768}px)`).matches) {
        const reloadState = Number(window.localStorage.getItem("reload-state"));
        if (reloadState !== 1) {
          location.reload();
          window.localStorage.setItem("reload-state", "1");
        }
      }

      if (window.matchMedia(`(max-width: ${1568}px)`).matches) {
        if (window.matchMedia(`(max-width: ${768}px)`).matches) return;
        const reloadState = Number(window.localStorage.getItem("reload-state"));
        if (reloadState !== 2) {
          location.reload();
          window.localStorage.setItem("reload-state", "2");
        }
      }
    };

    // Initial check
    checkBreakpoint();

    // function debounce(callback: () => void, delay: number) {
    //   return function () {
    //     clearTimeout(resizeTimer.current);
    //     resizeTimer.current = setTimeout(callback, delay);
    //   };
    // }

    window.addEventListener("resize", checkBreakpoint);

    return () => {
      window.removeEventListener("resize", checkBreakpoint);
    };
  });
};

export default useResizer;
