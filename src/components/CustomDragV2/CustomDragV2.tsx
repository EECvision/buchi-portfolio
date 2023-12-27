import { useEffect, useRef } from "react";
import classes from "./CustomDragV2.module.css";
import { MouseDirection, dirArr } from "../../hooks/UseMouseDirection2";
import useMouseDirection2 from "../../hooks/UseMouseDirection2";

export type MousePosition = {
  x: number;
  y: number;
};

export type MouseTrack = "enter" | "leave";

interface CustomDragState {
  children: React.ReactNode;
  onClick?: () => void;
  onMouseMove?: ({ x, y }: MousePosition) => void;
  onMouseTrack?: (track: MouseTrack) => void;
  onMouseDirChange?: (direction: MouseDirection) => void;
  onInstantMouseDirChange?: (direction: MouseDirection) => void;
  bouce?: boolean;
  customRef?: React.MutableRefObject<
    | {
        handleMouseTrack: (track: MouseTrack) => void;
        handleMouseDirection: (direction: MouseDirection) => void;
        handleCursorPosition: (position: MousePosition) => void;
      }
    | undefined
    | null
  >;
}

const CustomDragV2 = ({
  children,
  onClick,
  onMouseMove,
  onMouseTrack,
  onMouseDirChange,
  onInstantMouseDirChange,
  bouce,
  customRef,
}: CustomDragState) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  let animationId: number;

  const direction = useMouseDirection2(overlayRef);

  const handleReset = async () => {
    const overlay = overlayRef.current;
    if (overlay) {
      setTimeout(() => {
        onMouseMove && onMouseMove({ x: 0, y: 0 });
        customRef?.current?.handleCursorPosition({ x: 0, y: 0 });
        overlay.style.transform = `translate(0px, 0px)`;
        if (direction) {
          onMouseDirChange && onMouseDirChange(direction);
          customRef?.current?.handleMouseDirection(direction);
          if (bouce) {
            dirArr.forEach((d) => {
              containerRef.current?.classList.remove(d);
            });
            containerRef.current?.classList.add(direction);
          }
        }
      }, 10);
    }
  };

  const handleMouseMove = (event: { clientX: number; clientY: number }) => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    dirArr.forEach((d) => {
      if (containerRef.current?.classList.contains(d)) {
        containerRef.current?.classList.remove(d);
      }
    });
    animationId = requestAnimationFrame(() => {
      const { clientX, clientY } = event;
      const overlayPosition = overlay.getBoundingClientRect();

      const left = overlayPosition.left;
      const top = overlayPosition.top;

      const currX = clientX - left;
      const currY = clientY - top;

      const cX = currX - overlayPosition.width / 2;
      const cY = currY - overlayPosition.height / 2;

      overlay.style.transform = `translate(${cX * 0.2}px, ${cY * 0.3}px)`;
      customRef?.current?.handleCursorPosition({ x: cX, y: cY });
      onMouseMove && onMouseMove({ x: cX, y: cY });
      onInstantMouseDirChange && onInstantMouseDirChange(direction);
    });
  };

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    overlay.addEventListener("mouseenter", () => {
      onMouseTrack && onMouseTrack("enter");
      customRef?.current?.handleMouseTrack("enter");
    });
    overlay.addEventListener("mouseleave", () => {
      onMouseTrack && onMouseTrack("leave");
      customRef?.current?.handleMouseTrack("leave");
    });

    return () => {
      overlay.removeEventListener("mouseenter", () => {
        onMouseTrack && onMouseTrack("enter");
      });
      overlay.removeEventListener("mouseleave", () => {
        onMouseTrack && onMouseTrack("leave");
      });
    };
  }, []);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    overlay.addEventListener("mousemove", handleMouseMove);
    overlay.addEventListener("mouseout", () => {
      handleReset();
    });
    overlay.removeEventListener("mouseout", handleReset);
    overlay.removeEventListener("mousemove", (e) => {
      handleMouseMove(e);
      cancelAnimationFrame(animationId);
    });
  }, [direction]);

  return (
    <>
      <div onClick={onClick} ref={containerRef} className={classes.container}>
        {children}
        <div ref={overlayRef} className={classes.overlay}></div>
      </div>
    </>
  );
};

export default CustomDragV2;
