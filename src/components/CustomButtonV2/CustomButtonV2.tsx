import classes from "./CustomButtonV2.module.css";
import { useRef, useState, forwardRef, useImperativeHandle } from "react";
import { MousePosition, MouseTrack } from "../CustomDragV2/CustomDragV2";
import React from "react";

interface CustomButtonState {
  layoutClass?: string;
  overlayClass?: string;
  children: React.ReactNode;
  offsetContainer?: { x: number; y: number };
  offsetContent?: { x: number; y: number };
}

const CustomButtonV2 = forwardRef(function CustomButtonV2(
  {
    layoutClass,
    overlayClass,
    children,
    offsetContainer,
    offsetContent,
  }: CustomButtonState,
  ref
) {
  const btnRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState<MouseTrack>("leave");

  useImperativeHandle(
    ref,
    () => {
      return {
        handleMouseTrack: (track: MouseTrack) => {
          setAnimate(track);
        },
        handleMouseDirection: () => {},
        handleCursorPosition: (cursorPosition: MousePosition) => {
          requestAnimationFrame(() => {
            if (!cursorPosition || !textRef.current || !btnRef.current) return;
            textRef.current.style.transform = `translate(${
              cursorPosition.x * (offsetContent?.x || 0.1)
            }px, ${cursorPosition.y * (offsetContent?.y || 0.1)}px)`;
            btnRef.current.style.transform = `translate(${
              cursorPosition.x * (offsetContainer?.x || 0.2)
            }px, ${cursorPosition.y * (offsetContainer?.y || 0.2)}px)`;
          });
        },
      };
    },
    []
  );

  return (
    <div ref={btnRef} className={`${classes.btn} ${layoutClass}`}>
      <div
        className={`${classes.overlay} ${overlayClass} ${classes[animate]}`}
      ></div>

      <div className={classes.textContainer}>
        <div ref={textRef} className={`${classes.text} ${classes[animate]}`}>
          {children}
        </div>
      </div>
    </div>
  );
});

export default CustomButtonV2;
