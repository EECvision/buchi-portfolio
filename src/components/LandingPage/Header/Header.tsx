/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classes from "./Header.module.css";
import buchi from "../../../assets/landing-page/buchi-image.png";
import { useRef, useState } from "react";
import pointerIcon from "../../../assets/landing-page/icon-pointer.svg";
import pointerIconAccent from "../../../assets/landing-page/icon-pointer-accent.svg";
import CustomDragV2, { MouseTrack } from "../../CustomDragV2/CustomDragV2";
import { MouseDirection } from "../../../hooks/UseMouseDirection2";
import useMediaWidth from "../../../hooks/useMediaWidth";
import alphabet from "../../../assets/landing-page/Alphabet (1).svg";
import CustomButtonV2 from "../../CustomButtonV2/CustomButtonV2";

const Header = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const btnRef = useRef(null);
  const [mouseDir, setMouseDir] = useState<MouseDirection>();
  const [mouseTrack, setMouseTrack] = useState<MouseTrack>();
  useMediaWidth();

  const content = (id: string) => (
    <>
      <div className={classes.animationContainer}>
        <div className={`header-left ${classes.text} ${classes.left}`}>
          HI, I'm buchi. Selectively skilled
        </div>
      </div>
      <div className={classes.textContainer}>
        <div id={id} className={classes.mainText}>
          Pr
          <img className="header-letter" src={alphabet} alt="" />
          duct Designer
        </div>
      </div>
      <div className={classes.animationContainer}>
        <div className={`header-right ${classes.text} ${classes.right}`}>
          Helping teams design functional, appealing, and user-centric web and
          mobile
          <br className={classes.break} />
          experience that scales businesses, one thoughtful pixel at a time.
        </div>
      </div>
    </>
  );

  return (
    <div className={classes.container}>
      <div className={classes.elipse}></div>
      <div className={classes.mobile}>{content("main-text-mobile")}</div>
      <div id="header-image-container" className={classes.imageContainer}>
        <img ref={imageRef} className={classes.image} src={buchi} alt="" />
      </div>
      <div className={classes.imagePlaceholder}>
        <div id="header-connect-button" className={classes.connectContainer}>
          <CustomDragV2
            onInstantMouseDirChange={setMouseDir}
            onMouseTrack={setMouseTrack}
            bouce
            customRef={btnRef}
          >
            <CustomButtonV2
              layoutClass={classes.btn}
              overlayClass={classes.btnOverlay}
              ref={btnRef}
            >
              <div className={classes.btnContent}>
                <span>Get in touch</span>
                <div
                  className={`${classes.connectIcon} ${
                    classes[
                      mouseTrack === "leave"
                        ? "top-right"
                        : mouseDir || "top-right"
                    ]
                  }`}
                >
                  {mouseTrack === "enter" ? (
                    <img src={pointerIcon} />
                  ) : (
                    <img src={pointerIconAccent} />
                  )}
                </div>
              </div>
            </CustomButtonV2>
          </CustomDragV2>
        </div>
      </div>

      <div className={classes.desktop}>{content("main-text")}</div>
    </div>
  );
};

export default Header;
