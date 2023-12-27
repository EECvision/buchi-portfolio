/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

const useImageLoaded = () => {
  const intervalId = useRef(0);
  const scrollHeight = useRef(0);
  const [scrolling, setScrolling] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    const allImages = document.images;
    let loadedCount = 0;

    for (let i = 0; i < allImages.length; i++) {
      if (allImages[i].complete && allImages[i].naturalHeight !== 0) {
        loadedCount++;
      }
    }
    if (loadedCount >= allImages.length - (90 / 100) * allImages.length) {
      clearInterval(intervalId.current);
      window.scrollTo(0, 0);
      setTimeout(() => {
        setImageLoaded(true);
      }, 1000);
    } else {
      setTimeout(handleImageLoad, 500);
    }
  };

  const handleScrollPage = () => {
    setScrolling(true);
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }

    const getStep = () => {
      return scrollHeight.current / 10;
    };

    const scrollDown = () => {
      intervalId.current = window.setInterval(() => {
        window.scrollBy(0, getStep());
        if (window.scrollY + getStep() >= scrollHeight.current) {
          clearInterval(intervalId.current);
          window.scrollTo(0, 0);
        }
      }, 1000);
    };
    window.scrollTo(0, 0);
    scrollDown();
  };

  useEffect(() => {
    if (!scrollHeight) return;
    handleImageLoad();
    if (scrolling) return;
    handleScrollPage();
  }, [scrollHeight, scrolling]);

  useEffect(() => {
    scrollHeight.current = document.body.scrollHeight;
    window.addEventListener(
      "resize",
      () => (scrollHeight.current = document.body.scrollHeight)
    );
    return () => {
      window.removeEventListener("resize", handleScrollPage);
    };
  }, []);

  return imageLoaded;
};

export default useImageLoaded;
