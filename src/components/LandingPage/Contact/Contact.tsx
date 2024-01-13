import classes from "./Contact.module.css";
import buchi from "../../../assets/landing-page/buchi-avatar.svg";
import { useRef, useContext, useState } from "react";
import CustomDragV2, { MouseTrack } from "../../CustomDragV2/CustomDragV2";
import CustomButtonV2 from "../../CustomButtonV2/CustomButtonV2";
import phoneIcon from "../../../assets/landing-page/icon-phone.svg";
import emailIcon from "../../../assets/landing-page/icon-email.svg";
import phoneIconAccent from "../../../assets/landing-page/icon-phone-accent.svg";
import emailIconAccent from "../../../assets/landing-page/icon-email-accent.svg";
import { CursorContext } from "../../../context/cursor/CursorContext";
import { setComponent } from "../../../context/cursor/cursorActions";

const Contact = () => {
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const [phoneMouseTrack, setPhoneMouseTrack] = useState<MouseTrack>();
  const [emailMouseTrack, setEmailMouseTrack] = useState<MouseTrack>();

  const { dispatch } = useContext(CursorContext);

  const handleMouseEnter = () => {
    dispatch(setComponent("email"));
  };

  const handleMouseLeave = () => {
    dispatch(setComponent(null));
  };

  return (
    <>
      <div id="Contact" className={classes.container}>
        <div className={classes.imageContainer}>
          <img src={buchi} alt="" />
        </div>
        <div className={classes.text}>
          Happy to work with you, send a message
        </div>
        <div className={`${classes.mainText} contact-mainText`}>
          Hello@Buchi.pro
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={classes.mainTextOverlay}
          ></div>
        </div>
        <div className={classes.btnContainer}>
          <CustomDragV2
            onMouseTrack={setEmailMouseTrack}
            bouce
            customRef={btnRef1}
          >
            <CustomButtonV2
              layoutClass={classes.btn}
              overlayClass={classes.btnOverlay}
              ref={btnRef1}
            >
              <div className={classes.btnText}>
                {emailMouseTrack === "enter" ? (
                  <img src={emailIcon} alt="" />
                ) : (
                  <img src={emailIconAccent} alt="" />
                )}
                <span>Hello@Buchi.pro</span>
              </div>
            </CustomButtonV2>
          </CustomDragV2>
          <CustomDragV2
            onMouseTrack={setPhoneMouseTrack}
            bouce
            customRef={btnRef2}
          >
            <CustomButtonV2
              layoutClass={classes.btn}
              overlayClass={classes.btnOverlay}
              ref={btnRef2}
            >
              <div className={classes.btnText}>
                {phoneMouseTrack === "enter" ? (
                  <img src={phoneIcon} alt="" />
                ) : (
                  <img src={phoneIconAccent} alt="" />
                )}
                <span>+234 8024386677</span>
              </div>
            </CustomButtonV2>
          </CustomDragV2>
        </div>
      </div>
    </>
  );
};

export default Contact;
