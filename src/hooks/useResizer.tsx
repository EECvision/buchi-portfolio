/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";

const useResizer = () => {
  const resizeTimer = useRef<any>(0);

  useEffect(() => {
    function handleResizeEnd() {
      // window.location.reload();
    }

    function debounce(callback: () => void, delay: number) {
      return function () {
        clearTimeout(resizeTimer.current);
        resizeTimer.current = setTimeout(callback, delay);
      };
    }

    window.addEventListener("resize", debounce(handleResizeEnd, 200));

    return () => {
      window.removeEventListener("resize", debounce(handleResizeEnd, 200));
    };
  });
};

export default useResizer;
