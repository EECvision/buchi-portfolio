/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import useWindowWidth from "./useWindowWidth";

const useResizer = () => {
  const resizeTimer = useRef<any>(0);
  const { width } = useWindowWidth();

  useEffect(() => {
    function handleResizeEnd() {
      if (width > 720 && width < 768) {
        // window.location.reload();
      }
    }

    function debounce(callback: () => void, delay: number) {
      return function () {
        clearTimeout(resizeTimer.current);
        resizeTimer.current = setTimeout(callback, delay);
      };
    }

    window.addEventListener("resize", debounce(handleResizeEnd, 0));

    return () => {
      window.removeEventListener("resize", debounce(handleResizeEnd, 0));
    };
  });
};

export default useResizer;
