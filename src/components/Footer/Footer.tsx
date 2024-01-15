import classes from "./Footer.module.css";
import chevron from "../../assets/landing-page/chevron-up.svg";
import { useContext, useEffect, useRef, useState } from "react";
import CustomDragV2, { MousePosition } from "../CustomDragV2/CustomDragV2";
import CustomButtonV2 from "../CustomButtonV2/CustomButtonV2";
import { ScrollContext } from "../../context/LocomotiveScroll/scrollContext";

const Footer = ({ isPage }: { isPage?: boolean }) => {
  const [time, setTime] = useState<string>("");
  const [cursorPosition, setCursorPosition] = useState<MousePosition>();
  const iconContainerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLImageElement>(null);
  const twitterRef = useRef(null);
  const dribbleRef = useRef(null);
  const linkedinRef = useRef(null);
  const { locomotiveScroll } = useContext(ScrollContext);

  const handleScrollToTop = () => {
    if (isPage) {
      locomotiveScroll.scrollTo("#nested-page-container", {
        immediate: true,
      });
    } else {
      locomotiveScroll.scrollTo("#overlay", {
        immediate: true,
      });
    }
    // document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const hours = date.getHours() % 12 || 12;
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      const amPm = date.getHours() >= 12 ? "PM" : "AM";
      const formattedTime = `${String(hours).padStart(2, "0")}:${String(
        minutes
      ).padStart(2, "0")}:${String(seconds).padStart(2, "0")} ${amPm}`;
      setTime(formattedTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (iconContainerRef.current && cursorPosition) {
      iconContainerRef.current.style.transform = `translate(${
        cursorPosition.x * 0.2
      }px, ${cursorPosition.y * 0.3}px)`;
    }
  }, [cursorPosition]);

  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <CustomDragV2
          onMouseMove={setCursorPosition}
          onClick={handleScrollToTop}
          bouce
        >
          <div
            ref={iconContainerRef}
            className={`${classes.iconContainer} ${isPage && classes.isPage}`}
          >
            <img ref={iconRef} src={chevron} alt="" />
          </div>
        </CustomDragV2>
      </div>

      <div className={classes.bottom}>
        <div className={classes.time}>2023 © {time} WAT</div>
        <div className={classes.wrapper}>
          <div className={classes.letsConnect}>Let's connect</div>

          <div className={classes.socialLinks}>
            <CustomDragV2
              // onClick={() => handleLink("Work")}
              customRef={twitterRef}
            >
              <CustomButtonV2
                layoutClass={classes.layout}
                offsetContainer={{ x: 0.05, y: 0.2 }}
                offsetContent={{ x: 0.05, y: 0.2 }}
                ref={twitterRef}
              >
                <div className={classes.link}>Twitter-X</div>
              </CustomButtonV2>
            </CustomDragV2>

            <CustomDragV2
              // onClick={() => handleLink("Work")}
              customRef={linkedinRef}
            >
              <CustomButtonV2
                layoutClass={classes.layout}
                offsetContainer={{ x: 0.05, y: 0.2 }}
                offsetContent={{ x: 0.05, y: 0.2 }}
                ref={linkedinRef}
              >
                <div className={classes.link}>LinkedIn</div>
              </CustomButtonV2>
            </CustomDragV2>

            <CustomDragV2
              // onClick={() => handleLink("Work")}
              customRef={dribbleRef}
            >
              <CustomButtonV2
                layoutClass={classes.layout}
                offsetContainer={{ x: 0.05, y: 0.2 }}
                offsetContent={{ x: 0.05, y: 0.2 }}
                ref={dribbleRef}
              >
                <div className={classes.link}>Dribble</div>
              </CustomButtonV2>
            </CustomDragV2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
