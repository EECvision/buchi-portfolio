// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

// gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(
  start,
  ref: React.RefObject<HTMLDivElement>
) {
  useEffect(() => {
    if (!start) return;
    let locoScroll = null;
    if (!ref || !ref.current) return;
    const scrollEl = ref.current;

    console.log({ scrollEl });

    locoScroll = new LocomotiveScroll({
      el: window.document,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
    });

    return () => {
      if (locoScroll) {
        locoScroll.destroy();
        locoScroll = null;
        console.log("Kill", locoScroll);
      }
    };
  }, [start]);

  return null;
}
