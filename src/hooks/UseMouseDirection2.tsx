import { useEffect, useState } from "react";

export type MouseDirection =
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "top-left"
  | "top-right"
  | "bottom-right"
  | "bottom-left"
  | null;

export const dirArr = [
  "left",
  "right",
  "top",
  "bottom",
  "top-left",
  "top-right",
  "bottom-right",
  "bottom-left",
];

const useMouseDirection2 = (containerRef: React.RefObject<HTMLDivElement>) => {
  const [direction, setDirection] = useState<MouseDirection>(null);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      const container = containerRef.current;
      if (!container) return;

      const { left, top, width, height } = container.getBoundingClientRect();
      const mouseX = e.clientX - left;
      const mouseY = e.clientY - top;

      const isLeft = mouseX < width / 3;
      const isRight = mouseX > (2 * width) / 3;
      const isTop = mouseY < height / 3;
      const isBottom = mouseY > (2 * height) / 3;

      if (isTop && isLeft) {
        setDirection("top-left");
      } else if (isTop && isRight) {
        setDirection("top-right");
      } else if (isBottom && isRight) {
        setDirection("bottom-right");
      } else if (isBottom && isLeft) {
        setDirection("bottom-left");
      } else if (isLeft) {
        setDirection("left");
      } else if (isRight) {
        setDirection("right");
      } else if (isTop) {
        setDirection("top");
      } else if (isBottom) {
        setDirection("bottom");
      } else {
        setDirection(null);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [containerRef]);

  return direction;
};

export default useMouseDirection2;
