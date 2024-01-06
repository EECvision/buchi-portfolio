/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";

const useMediaWidth = () => {
  const resizeTimer = useRef<any>(0);
  const timerId = useRef<any>(0);

  const [mediaWidth, setMediaWidth] = useState(1377);

  const updateMediaWidth = async () => {
    const mainTextRef = document.getElementById("main-text");

    if (!mainTextRef) return;

    const leftOfMainText = mainTextRef?.getBoundingClientRect().left;

    if (leftOfMainText < 48) {
      clearTimeout(timerId.current);

      let left = leftOfMainText;
      let width = mainTextRef.getBoundingClientRect().width;

      while (left < 48 && width >= 716) {
        await new Promise((res) => {
          timerId.current = setTimeout(() => {
            const computedStyle = window.getComputedStyle(mainTextRef);
            const fontSize = computedStyle.getPropertyValue("font-size");
            mainTextRef.style.fontSize = `${parseInt(fontSize) - 1}px`;
            left = mainTextRef?.getBoundingClientRect().left;
            width = mainTextRef.getBoundingClientRect().width;
            setMediaWidth(width);
            console.log("running... downsize");
            res("");
          }, 0);
        });
      }
    } else if (leftOfMainText) {
      let left = leftOfMainText;
      let width = mainTextRef.getBoundingClientRect().width;
      const computedStyle = window.getComputedStyle(mainTextRef);
      let fontSize = computedStyle.getPropertyValue("font-size");

      while (left > 64 && parseInt(fontSize) <= 101) {
        await new Promise((res) => {
          timerId.current = setTimeout(() => {
            fontSize = computedStyle.getPropertyValue("font-size");
            mainTextRef.style.fontSize =
              parseInt(fontSize) > 101
                ? `${parseInt(fontSize)}px`
                : `${parseInt(fontSize) + 1}px`;
            left = mainTextRef?.getBoundingClientRect().left;
            width = mainTextRef.getBoundingClientRect().width;
            setMediaWidth(width);
            console.log("running... upsize");
            res("");
          }, 0);
        });
      }
    }
  };

  useEffect(() => {
    function handleResizeEnd() {
      updateMediaWidth();
    }

    function debounce(callback: () => void, delay: number) {
      return function () {
        clearTimeout(resizeTimer.current);
        resizeTimer.current = setTimeout(callback, delay);
      };
    }

    updateMediaWidth();

    window.addEventListener("resize", debounce(handleResizeEnd, 0));

    return () => {
      window.removeEventListener("resize", debounce(handleResizeEnd, 0));
    };
  });

  return mediaWidth;
};

export default useMediaWidth;
