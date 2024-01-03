/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";

const useScroll = () => {
  const scrollHeight = useRef(0);

  useEffect(() => {
    scrollHeight.current = window.scrollY;
    window.addEventListener(
      "scroll",
      () => (scrollHeight.current = window.scrollY)
    );
    return () => {
      window.removeEventListener(
        "scroll",
        () => (scrollHeight.current = window.scrollY)
      );
    };
  }, []);

  useEffect(() => {}, [scrollHeight.current]);

  return { scrollHeight: scrollHeight.current };
};

export default useScroll;
