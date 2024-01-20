/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState, useEffect, useRef } from "react";
import classes from "./CustomCursor.module.css";
import { CursorContext } from "../../context/cursor/CursorContext";

// TODO: Hide if cursor not moved
const CustomCursor = () => {
  const cursorData = useContext(CursorContext);

  const [scratchPad, setScratchPad] = useState(cursorData);
  const [reset, setReset] = useState(false);
  const [copy, setCopy] = useState(false);
  const timerId = useRef<any>(0);

  const { size, component } = scratchPad;

  const cursorRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    clearTimeout(timerId.current);

    timerId.current = setTimeout(
      () => {
        setScratchPad(cursorData);
        setReset(false);
      },
      cursorData.component === "email" ? 0 : 0
    );
    setReset(true);
  }, [cursorData]);

  useEffect(() => {
    const mouseMoveEvent = document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;
      if (!cursorRef.current) return;

      positionRef.current.mouseX = mouseX - cursorRef.current.clientWidth / 2;
      positionRef.current.mouseY = mouseY - cursorRef.current.clientHeight / 2;
    });

    const mouseDownEvent = document.addEventListener(
      "mousedown",
      (event: any) => {
        if (event.target && event.target.closest(`.contact-mainText`)) {
          event.stopPropagation();
          navigator.clipboard.writeText("Hello@Buchi.pro");
          setCopy(true);
          setTimeout(() => {
            setCopy(false);
          }, 650);
        }
      }
    );

    return () => {
      mouseMoveEvent;
      mouseDownEvent;
    };
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.5;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.5;
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.05
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      if (cursorRef?.current) {
        cursorRef.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
      }
    };
    followMouse();
  }, []);

  return (
    <div ref={cursorRef} className={classes.cursorWrapper}>
      <div
        className={`${classes.animate} ${reset && classes.reset} ${
          classes[component || "default"]
        }`}
      >
        {!component && (
          <div className={`${classes.default} ${classes[size]}`}></div>
        )}

        {component === "email" && (
          <div className={`${classes.email} ${classes[size]}`}>
            <div className={classes.text}>
              {copy ? (
                <>Copied</>
              ) : (
                <>
                  Click to <br /> copy
                </>
              )}
            </div>
          </div>
        )}

        {component === "project" && (
          <div className={`${classes.project} ${classes[size]}`}>
            <div className={classes.text}>
              view case <br /> study
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomCursor;
